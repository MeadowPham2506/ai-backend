import Database from "@src/core/database.core";
import { Employee } from "@src/generated/prisma";

const prisma = Database.getClient();

export default class EmployeeRepository {
    static async getEmployees(
        page: number = 1,
        limit: number = 10,
        email?: string,
        code?: string
    ) {
        const offset = limit === -1 ? 0 : (page - 1) * limit;

        const whereClause: any = {};

        if (email) {
            whereClause.email = { contains: email, mode: 'insensitive' };
        }

        if (code) {
            whereClause.code = { contains: code, mode: 'insensitive' };
        }

        return prisma.employee.findMany({
            where: whereClause,
            skip: offset,
            take: limit === -1 ? undefined : limit,
            orderBy: { employee_code: 'asc' }
        });
    }

    static async searchEmployeesByName(
        page: number = 1,
        limit: number = 10,
        name: string
    ) {
        const offset = limit === -1 ? 0 : (page - 1) * limit;
        const normalizedName = `%${name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()}%`;

        return prisma.$queryRaw`
            SELECT * FROM employees
            WHERE 
                unaccent(lower(first_name)) LIKE unaccent(${normalizedName})
                OR unaccent(lower(last_name)) LIKE unaccent(${normalizedName})
            ORDER BY employee_code ASC
            LIMIT ${limit === -1 ? 999999 : limit}
            OFFSET ${offset}
        ` as Promise<Employee[]>;
    }

    static countEmployees(
        email?: string,
        code?: string
    ): Promise<number> {
        const whereClause: any = {};
        
        if (email) {
            whereClause.email = { contains: email, mode: 'insensitive' };
        }
        if (code) {
            whereClause.code = { contains: code, mode: 'insensitive' };
        }

        return prisma.employee.count({
            where: whereClause
        });
    }

    static async countEmployeesByName(name: string): Promise<number> {
        const normalizedName = `%${name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()}%`;

        const result = await prisma.$queryRaw<Array<{ count: bigint }>>`
            SELECT COUNT(*)::int as count FROM employees
            WHERE 
                unaccent(lower(first_name)) LIKE unaccent(${normalizedName})
                OR unaccent(lower(last_name)) LIKE unaccent(${normalizedName})
        `;

        return Number(result[0].count);
    }

    static async getEmployeeByCode(code: string): Promise<Employee | null> {
        return prisma.employee.findUnique({
            where: { employee_code: code }
        })
    }
}