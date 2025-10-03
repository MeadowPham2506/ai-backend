import Database from "@src/core/database.core";

const prisma = Database.getClient();

export default class ProductRepository {

    async createProduct(data: ProductDocument) {
        return prisma.product.create({ data });
    }

    async getProductById(id: number) {
        return prisma.product.findUnique({ where: { id } });
    }

    async getProductWithCategoryById(id: number) {
        return prisma.product.findUnique({
            where: { id },
            include: { category: true },
        });
    }

    async updateProduct(id: number, data: ProductDocument) {
        return prisma.product.update({ where: { id }, data });
    }

    async deleteProduct(id: number) {
        return prisma.product.delete({ where: { id } });
    }

    async getAllProducts(page: number = 1, limit: number = 10) {
        const offset = (page - 1) * limit;
        return prisma.product.findMany({
            skip: offset,
            take: limit,
        });
    }
}