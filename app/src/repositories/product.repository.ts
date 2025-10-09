import Database from "@src/core/database.core";
import { CreateProductDto, UpdateProductDto } from "../types/dtos";

const prisma = Database.getClient();

export default class ProductRepository {

    static async createProduct(data: CreateProductDto) {
        return prisma.product.create({ 
            data: {
                name: data.name,
                unit: data.unit,
                origin: data.origin,
                note: data.note || null,
                is_active: data.is_active ?? true
            }
        });
    }

    static async getProductById(id: number) {
        return prisma.product.findUnique({ where: { id } });
    }

    static async updateProduct(id: number, data: UpdateProductDto) {
        return prisma.product.update({ 
            where: { id }, 
            data: {
                ...(data.name && { name: data.name }),
                ...(data.unit && { unit: data.unit }),
                ...(data.origin && { origin: data.origin }),
                ...(data.note !== undefined && { note: data.note }),
                ...(data.is_active !== undefined && { is_active: data.is_active })
            }
        });
    }

    static async deleteProduct(id: number): Promise<boolean> {
        try {
            await prisma.product.delete({ where: { id } });
            return true;
        } catch (error) {
            return false;
        }
    }

    static async getAllProducts(
        page: number = 1, 
        limit: number = 10, 
        search?: string, 
        is_active?: boolean
    ) {
        const offset = limit === -1 ? 0 : (page - 1) * limit;
        
        const whereClause: any = {};
        
        if (search) {
            whereClause.OR = [
                { name: { contains: search, mode: 'insensitive' } },
                { unit: { contains: search, mode: 'insensitive' } },
                { origin: { contains: search, mode: 'insensitive' } }
            ];
        }
        
        if (is_active !== undefined) {
            whereClause.is_active = is_active;
        }

        return prisma.product.findMany({
            where: whereClause,
            skip: offset,
            take: limit === -1 ? undefined : limit,
            orderBy: { id: 'desc' }
        });
    }

    static async countProducts(search?: string, is_active?: boolean): Promise<number> {
        const whereClause: any = {};
        
        if (search) {
            whereClause.OR = [
                { name: { contains: search, mode: 'insensitive' } },
                { unit: { contains: search, mode: 'insensitive' } },
                { origin: { contains: search, mode: 'insensitive' } }
            ];
        }
        
        if (is_active !== undefined) {
            whereClause.is_active = is_active;
        }

        return prisma.product.count({
            where: whereClause
        });
    }

    // Private method for internal use (validation, etc.) - not exposed via endpoints
    static async findByName(name: string) {
        return prisma.product.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: 'insensitive'
                }
            }
        });
    }
}