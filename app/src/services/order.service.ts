import OrderRepository from '@src/repositories/order.repository';
import UserRepository from '@src/repositories/user.repository';
import ProductRepository from '@src/repositories/product.repository';
import { 
    CreateOrderDto, 
    UpdateOrderDto, 
    GetOrdersQueryDto, 
    OrderResponseDto 
} from '@src/types/dtos';
import { APIErrorResponse } from '@src/core/response.core';

export default class OrderService {
    static async getOrders(query: GetOrdersQueryDto) {
        return await OrderRepository.findAll(query);
    }

    static async getOrderById(id: number): Promise<OrderResponseDto | null> {
        if (isNaN(id) || id <= 0) {
            throw new APIErrorResponse('Invalid order ID', 400);
        }
        
        return await OrderRepository.findById(id);
    }

    static async createOrder(orderData: CreateOrderDto): Promise<OrderResponseDto> {
        // Validate required fields
        if (!orderData.user_id || !orderData.product_id || !orderData.quantity) {
            throw new APIErrorResponse('User ID, Product ID, and quantity are required', 400);
        }

        if (isNaN(orderData.user_id) || orderData.user_id <= 0) {
            throw new APIErrorResponse('Invalid user ID', 400);
        }

        if (isNaN(orderData.product_id) || orderData.product_id <= 0) {
            throw new APIErrorResponse('Invalid product ID', 400);
        }

        if (isNaN(orderData.quantity) || orderData.quantity <= 0) {
            throw new APIErrorResponse('Quantity must be a positive number', 400);
        }

        // Check if user exists
        const user = await UserRepository.findById(orderData.user_id);
        if (!user) {
            throw new APIErrorResponse('User not found', 404);
        }

        // Check if product exists and is active
        const product = await ProductRepository.getProductById(orderData.product_id);
        if (!product) {
            throw new APIErrorResponse('Product not found', 404);
        }

        if (!product.is_active) {
            throw new APIErrorResponse('Product is not active', 400);
        }

        return await OrderRepository.create({
            user: {
                connect: { id: orderData.user_id }
            },
            product: {
                connect: { id: orderData.product_id }
            },
            quantity: orderData.quantity,
            purpose: orderData.purpose || null
        });
    }

    static async updateOrder(id: number, updateData: UpdateOrderDto): Promise<OrderResponseDto | null> {
        if (isNaN(id) || id <= 0) {
            throw new APIErrorResponse('Invalid order ID', 400);
        }

        // Check if order exists
        const existingOrder = await OrderRepository.findById(id);
        if (!existingOrder) {
            return null;
        }

        // Validate fields if provided
        if (updateData.user_id !== undefined) {
            if (isNaN(updateData.user_id) || updateData.user_id <= 0) {
                throw new APIErrorResponse('Invalid user ID', 400);
            }

            // Check if user exists
            const user = await UserRepository.findById(updateData.user_id);
            if (!user) {
                throw new APIErrorResponse('User not found', 404);
            }
        }

        if (updateData.product_id !== undefined) {
            if (isNaN(updateData.product_id) || updateData.product_id <= 0) {
                throw new APIErrorResponse('Invalid product ID', 400);
            }

            // Check if product exists and is active
            const product = await ProductRepository.getProductById(updateData.product_id);
            if (!product) {
                throw new APIErrorResponse('Product not found', 404);
            }

            if (!product.is_active) {
                throw new APIErrorResponse('Product is not active', 400);
            }
        }

        if (updateData.quantity !== undefined) {
            if (isNaN(updateData.quantity) || updateData.quantity <= 0) {
                throw new APIErrorResponse('Quantity must be a positive number', 400);
            }
        }

        // Prepare update data for Prisma
        const prismaUpdateData: any = {};
        
        if (updateData.user_id !== undefined) {
            prismaUpdateData.user = { connect: { id: updateData.user_id } };
        }
        
        if (updateData.product_id !== undefined) {
            prismaUpdateData.product = { connect: { id: updateData.product_id } };
        }
        
        if (updateData.quantity !== undefined) {
            prismaUpdateData.quantity = updateData.quantity;
        }
        
        if (updateData.purpose !== undefined) {
            prismaUpdateData.purpose = updateData.purpose;
        }

        return await OrderRepository.update(id, prismaUpdateData);
    }

    static async deleteOrder(id: number): Promise<boolean> {
        if (isNaN(id) || id <= 0) {
            throw new APIErrorResponse('Invalid order ID', 400);
        }

        // Check if order exists
        const existingOrder = await OrderRepository.findById(id);
        if (!existingOrder) {
            return false;
        }

        return await OrderRepository.delete(id);
    }

    static async getOrdersByUserId(userId: number): Promise<OrderResponseDto[]> {
        if (isNaN(userId) || userId <= 0) {
            throw new APIErrorResponse('Invalid user ID', 400);
        }

        // Check if user exists
        const user = await UserRepository.findById(userId);
        if (!user) {
            throw new APIErrorResponse('User not found', 404);
        }

        return await OrderRepository.findByUserId(userId);
    }

    static async getOrdersByProductId(productId: number): Promise<OrderResponseDto[]> {
        if (isNaN(productId) || productId <= 0) {
            throw new APIErrorResponse('Invalid product ID', 400);
        }

        // Check if product exists
        const product = await ProductRepository.getProductById(productId);
        if (!product) {
            throw new APIErrorResponse('Product not found', 404);
        }

        return await OrderRepository.findByProductId(productId);
    }
}