import { Request, Response } from 'express';
import ProductService from '../services/product.service';
import { ApiResponseHandler, APIErrorResponse } from '@src/core/response.core';
import asyncWrapper from '@src/utils/async-wrapper.util';
import { 
    GetProductsQueryDto, 
    CreateProductDto, 
    UpdateProductDto,
    ProductResponseDto,
    SuccessResponse,
    PaginatedResponse,
    ErrorResponse
} from '../types/dtos';

export default class ProductController {
    static getProducts = asyncWrapper(async (req: Request, res: Response): Promise<Response<PaginatedResponse<ProductResponseDto>>> => {
        const query: GetProductsQueryDto = req.query;
        const result = await ProductService.getProducts(query);
        
        return ApiResponseHandler.sendPaginated(
            res,
            result.products,
            result.pagination,
            'Products retrieved successfully'
        );
    });

    static getProductById = asyncWrapper(async (req: Request, res: Response): Promise<Response<SuccessResponse<ProductResponseDto> | ErrorResponse>> => {
        const { id } = req.params;
        const product = await ProductService.getProductById(parseInt(id));
        
        if (!product) {
            throw new APIErrorResponse('Product not found', 404);
        }

        return ApiResponseHandler.sendSuccess(
            res,
            product,
            'Product retrieved successfully'
        );
    });

    static createProduct = asyncWrapper(async (req: Request, res: Response): Promise<Response<SuccessResponse<ProductResponseDto> | ErrorResponse>> => {
        const productData: CreateProductDto = req.body;
        const product = await ProductService.createProduct(productData);
        
        return ApiResponseHandler.sendSuccess(
            res,
            product,
            'Product created successfully',
            201
        );
    });

    static updateProduct = asyncWrapper(async (req: Request, res: Response): Promise<Response<SuccessResponse<ProductResponseDto> | ErrorResponse>> => {
        const { id } = req.params;
        const updateData: UpdateProductDto = req.body;
        const product = await ProductService.updateProduct(parseInt(id), updateData);
        
        if (!product) {
            throw new APIErrorResponse('Product not found', 404);
        }

        return ApiResponseHandler.sendSuccess(
            res,
            product,
            'Product updated successfully'
        );
    });

    static deleteProduct = asyncWrapper(async (req: Request, res: Response): Promise<Response<SuccessResponse<null> | ErrorResponse>> => {
        const { id } = req.params;
        const deleted = await ProductService.deleteProduct(parseInt(id));
        
        if (!deleted) {
            throw new APIErrorResponse('Product not found', 404);
        }

        return ApiResponseHandler.sendSuccess(
            res,
            null,
            'Product deleted successfully'
        );
    });
}