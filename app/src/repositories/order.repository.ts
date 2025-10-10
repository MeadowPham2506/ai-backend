import Database from "@src/core/database.core";

const prisma = Database.getClient();

export default class OrderRepository {
    /**
     * Get all orders with optional filters and pagination
     */
    static async getOrders(
        page: number = 1,
        limit: number = 10,
        employee_code?: string,
        start_date?: Date,
        end_date?: Date
    ) {
        const offset = limit === -1 ? 0 : (page - 1) * limit;

        const whereClause: any = {};

        if (employee_code) {
            whereClause.employee_code = { contains: employee_code, mode: 'insensitive' };
        }

        if (start_date || end_date) {
            whereClause.created_at = {};
            if (start_date) {
                whereClause.created_at.gte = start_date;
            }
            if (end_date) {
                // Set to end of day (23:59:59)
                const endOfDay = new Date(end_date);
                endOfDay.setHours(23, 59, 59, 999);
                whereClause.created_at.lte = endOfDay;
            }
        }

        const orders = await prisma.order.findMany({
            where: whereClause,
            skip: offset,
            take: limit === -1 ? undefined : limit,
            orderBy: { created_at: 'desc' },
            include: {
                employee: {
                    select: {
                        first_name: true,
                        last_name: true,
                    }
                }
            }
        });

        // Transform to match OrderResponseDto
        return orders.map(order => ({
            id: order.id,
            employee_name: `${order.employee.first_name} ${order.employee.last_name}`,
            product_id: order.product_id,
            quantity: order.quantity,
            purpose: order.purpose
        }));
    }

    /**
     * Count orders with optional filters
     */
    static async countOrders(
        employee_code?: string,
        start_date?: Date,
        end_date?: Date
    ) {
        const whereClause: any = {};

        if (employee_code) {
            whereClause.employee_code = { contains: employee_code, mode: 'insensitive' };
        }

        if (start_date || end_date) {
            whereClause.created_at = {};
            if (start_date) {
                whereClause.created_at.gte = start_date;
            }
            if (end_date) {
                // Set to end of day (23:59:59)
                const endOfDay = new Date(end_date);
                endOfDay.setHours(23, 59, 59, 999);
                whereClause.created_at.lte = endOfDay;
            }
        }

        return prisma.order.count({
            where: whereClause
        });
    }

    /**
     * Create a new order
     */
    static async createOrder(data: {
        employee_code: string;
        product_id: number;
        quantity: number;
        purpose?: string;
    }) {
        const order = await prisma.order.create({
            data: {
                employee_code: data.employee_code,
                product_id: data.product_id,
                quantity: data.quantity,
                purpose: data.purpose || null,
            },
            include: {
                employee: {
                    select: {
                        first_name: true,
                        last_name: true,
                    }
                }
            }
        });

        // Transform to match OrderResponseDto
        return {
            id: order.id,
            employee_name: `${order.employee.first_name} ${order.employee.last_name}`,
            product_id: order.product_id,
            quantity: order.quantity,
            purpose: order.purpose
        };
    }

    /**
     * Check if employee exists
     */
    static async employeeExists(employee_code: string): Promise<boolean> {
        const employee = await prisma.employee.findUnique({
            where: { employee_code }
        });
        return !!employee;
    }

    /**
     * Check if product exists and is active
     */
    static async productExists(product_id: number): Promise<boolean> {
        const product = await prisma.product.findFirst({
            where: { 
                id: product_id,
                is_active: true
            }
        });
        return !!product;
    }
}
