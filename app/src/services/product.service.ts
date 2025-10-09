import ProductRepository from "@src/repositories/product.repository";
import { 
    GetProductsQueryDto, 
    CreateProductDto, 
    UpdateProductDto,
    ProductListResponseDto,
    ProductResponseDto 
} from "../types/dtos";
import { APIErrorResponse } from '@src/core/response.core';

export default class ProductService {
    static async getProducts(query: GetProductsQueryDto): Promise<ProductListResponseDto> {
        const page = query.page ? parseInt(query.page.toString()) : 1;
        const limit = query.limit ? parseInt(query.limit.toString()) : 10;
        const search = query.search;
        const is_active = query.is_active ? 
            (typeof query.is_active === 'string' ? query.is_active === 'true' : query.is_active) : 
            undefined;

        // Validate pagination parameters
        if (page <= 0) {
            throw new APIErrorResponse('Page number must be greater than 0', 400);
        }

        if (limit <= 0 || limit > 100) {
            throw new APIErrorResponse('Limit must be between 1 and 100', 400);
        }

        const products = await ProductRepository.getAllProducts(page, limit, search, is_active);
        const total = await ProductRepository.countProducts(search, is_active);
        const totalPages = Math.ceil(total / limit);

        return {
            products: products.map(product => ({
                id: product.id,
                name: product.name,
                unit: product.unit,
                origin: product.origin,
                note: product.note,
                is_active: product.is_active
            })),
            pagination: {
                page,
                limit,
                total,
                totalPages
            }
        };
    }

    static async getProductById(id: number): Promise<ProductResponseDto | null> {
        if (isNaN(id) || id <= 0) {
            throw new APIErrorResponse('Invalid product ID', 400);
        }

        const product = await ProductRepository.getProductById(id);
        
        if (!product) {
            return null;
        }

        return {
            id: product.id,
            name: product.name,
            unit: product.unit,
            origin: product.origin,
            note: product.note,
            is_active: product.is_active
        };
    }

    static async createProduct(productData: CreateProductDto): Promise<ProductResponseDto> {
        // Validate required fields
        if (!productData.name || productData.name.trim() === '') {
            throw new APIErrorResponse('Product name is required', 400);
        }

        if (!productData.unit || productData.unit.trim() === '') {
            throw new APIErrorResponse('Product unit is required', 400);
        }

        if (!productData.origin || productData.origin.trim() === '') {
            throw new APIErrorResponse('Product origin is required', 400);
        }

        // Check if product with same name already exists
        const existingProduct = await ProductRepository.findByName(productData.name.trim());
        if (existingProduct) {
            throw new APIErrorResponse('Product with this name already exists', 409);
        }

        // Clean and prepare data
        const cleanedData: CreateProductDto = {
            name: productData.name.trim(),
            unit: productData.unit.trim(),
            origin: productData.origin.trim(),
            note: productData.note?.trim() || undefined,
            is_active: productData.is_active ?? true
        };

        const product = await ProductRepository.createProduct(cleanedData);
        
        return {
            id: product.id,
            name: product.name,
            unit: product.unit,
            origin: product.origin,
            note: product.note,
            is_active: product.is_active
        };
    }

    static async updateProduct(id: number, updateData: UpdateProductDto): Promise<ProductResponseDto | null> {
        if (isNaN(id) || id <= 0) {
            throw new APIErrorResponse('Invalid product ID', 400);
        }

        // Check if product exists
        const existingProduct = await ProductRepository.getProductById(id);
        if (!existingProduct) {
            return null;
        }

        // Validate fields if provided
        if (updateData.name !== undefined) {
            if (!updateData.name || updateData.name.trim() === '') {
                throw new APIErrorResponse('Product name cannot be empty', 400);
            }

            // Check if another product with same name already exists
            const productWithSameName = await ProductRepository.findByName(updateData.name.trim());
            if (productWithSameName && productWithSameName.id !== id) {
                throw new APIErrorResponse('Product with this name already exists', 409);
            }

            updateData.name = updateData.name.trim();
        }

        if (updateData.unit !== undefined) {
            if (!updateData.unit || updateData.unit.trim() === '') {
                throw new APIErrorResponse('Product unit cannot be empty', 400);
            }
            updateData.unit = updateData.unit.trim();
        }

        if (updateData.origin !== undefined) {
            if (!updateData.origin || updateData.origin.trim() === '') {
                throw new APIErrorResponse('Product origin cannot be empty', 400);
            }
            updateData.origin = updateData.origin.trim();
        }

        if (updateData.note !== undefined) {
            updateData.note = updateData.note?.trim() || undefined;
        }

        const product = await ProductRepository.updateProduct(id, updateData);
        
        if (!product) {
            return null;
        }

        return {
            id: product.id,
            name: product.name,
            unit: product.unit,
            origin: product.origin,
            note: product.note,
            is_active: product.is_active
        };
    }
}