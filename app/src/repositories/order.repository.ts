import { PrismaClient, Prisma } from '@src/generated/prisma';
import { GetOrdersQueryDto, OrderResponseDto } from '@src/types/dtos';

export default class OrderRepository {
    private static prisma = new PrismaClient();

    static async findAll(query: GetOrdersQueryDto) {
        const {
            page = 1,
            limit = 10,
            user_id,
            product_id,
            sortBy = 'created_at',
            sortOrder = 'desc',
            dateFrom,
            dateTo
        } = query;

        const pageNum = typeof page === 'string' ? parseInt(page) : page;
        const limitNum = typeof limit === 'string' ? parseInt(limit) : limit;
        const skip = (pageNum - 1) * limitNum;

        const where: Prisma.OrderWhereInput = {};
        
        if (user_id) {
            where.user_id = typeof user_id === 'string' ? parseInt(user_id) : user_id;
        }

        if (product_id) {
            where.product_id = typeof product_id === 'string' ? parseInt(product_id) : product_id;
        }

        if (dateFrom || dateTo) {
            where.created_at = {};
            if (dateFrom) {
                where.created_at.gte = new Date(dateFrom);
            }
            if (dateTo) {
                where.created_at.lte = new Date(dateTo);
            }
        }

        const orderBy: Prisma.OrderOrderByWithRelationInput = {
            [sortBy]: sortOrder
        };

        const [orders, total] = await Promise.all([
            this.prisma.order.findMany({
                where,
                orderBy,
                skip,
                take: limitNum,
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true
                        }
                    },
                    product: {
                        select: {
                            id: true,
                            name: true,
                            unit: true,
                            origin: true,
                            note: true
                        }
                    }
                }
            }),
            this.prisma.order.count({ where })
        ]);

        return {
            orders: orders as OrderResponseDto[],
            pagination: {
                page: pageNum,
                limit: limitNum,
                total,
                totalPages: Math.ceil(total / limitNum)
            }
        };
    }

    static async findById(id: number): Promise<OrderResponseDto | null> {
        const order = await this.prisma.order.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                product: {
                    select: {
                        id: true,
                        name: true,
                        unit: true,
                        origin: true,
                        note: true
                    }
                }
            }
        });

        return order as OrderResponseDto | null;
    }

    static async create(data: Prisma.OrderCreateInput): Promise<OrderResponseDto> {
        const order = await this.prisma.order.create({
            data,
            include: {
                user: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                product: {
                    select: {
                        id: true,
                        name: true,
                        unit: true,
                        origin: true,
                        note: true
                    }
                }
            }
        });

        return order as OrderResponseDto;
    }

    static async update(id: number, data: Prisma.OrderUpdateInput): Promise<OrderResponseDto | null> {
        try {
            const order = await this.prisma.order.update({
                where: { id },
                data,
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true
                        }
                    },
                    product: {
                        select: {
                            id: true,
                            name: true,
                            unit: true,
                            origin: true,
                            note: true
                        }
                    }
                }
            });

            return order as OrderResponseDto;
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
                return null;
            }
            throw error;
        }
    }

    static async delete(id: number): Promise<boolean> {
        try {
            await this.prisma.order.delete({
                where: { id }
            });
            return true;
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
                return false;
            }
            throw error;
        }
    }

    static async findByUserId(userId: number): Promise<OrderResponseDto[]> {
        const orders = await this.prisma.order.findMany({
            where: { user_id: userId },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                product: {
                    select: {
                        id: true,
                        name: true,
                        unit: true,
                        origin: true,
                        note: true
                    }
                }
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        return orders as OrderResponseDto[];
    }

    static async findByProductId(productId: number): Promise<OrderResponseDto[]> {
        const orders = await this.prisma.order.findMany({
            where: { product_id: productId },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                product: {
                    select: {
                        id: true,
                        name: true,
                        unit: true,
                        origin: true,
                        note: true
                    }
                }
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        return orders as OrderResponseDto[];
    }
}