import { Request, Response } from 'express';
import OrderService from '../services/order.service';
import { ApiResponseHandler, APIErrorResponse } from '@src/core/response.core';
import asyncWrapper from '@src/utils/async-wrapper.util';
import { 
    GetOrdersQueryDto, 
    CreateOrderDto, 
    UpdateOrderDto,
    OrderResponseDto,
    SuccessResponse,
    PaginatedResponse,
    ErrorResponse
} from '../types/dtos';

export default class OrderController {
    static getOrders = asyncWrapper(async (req: Request, res: Response): Promise<Response<PaginatedResponse<OrderResponseDto>>> => {
        const query: GetOrdersQueryDto = req.query;
        const result = await OrderService.getOrders(query);
        
        return ApiResponseHandler.sendPaginated(
            res,
            result.orders,
            result.pagination,
            'Orders retrieved successfully'
        );
    });

    static getOrderById = asyncWrapper(async (req: Request, res: Response): Promise<Response<SuccessResponse<OrderResponseDto> | ErrorResponse>> => {
        const { id } = req.params;
        const order = await OrderService.getOrderById(parseInt(id));
        
        if (!order) {
            throw new APIErrorResponse('Order not found', 404);
        }

        return ApiResponseHandler.sendSuccess(
            res,
            order,
            'Order retrieved successfully'
        );
    });

    static createOrder = asyncWrapper(async (req: Request, res: Response): Promise<Response<SuccessResponse<OrderResponseDto> | ErrorResponse>> => {
        const orderData: CreateOrderDto = req.body;
        const order = await OrderService.createOrder(orderData);
        
        return ApiResponseHandler.sendSuccess(
            res,
            order,
            'Order created successfully',
            201
        );
    });

    static updateOrder = asyncWrapper(async (req: Request, res: Response): Promise<Response<SuccessResponse<OrderResponseDto> | ErrorResponse>> => {
        const { id } = req.params;
        const updateData: UpdateOrderDto = req.body;
        const order = await OrderService.updateOrder(parseInt(id), updateData);
        
        if (!order) {
            throw new APIErrorResponse('Order not found', 404);
        }

        return ApiResponseHandler.sendSuccess(
            res,
            order,
            'Order updated successfully'
        );
    });

    static deleteOrder = asyncWrapper(async (req: Request, res: Response): Promise<Response<SuccessResponse<null> | ErrorResponse>> => {
        const { id } = req.params;
        const deleted = await OrderService.deleteOrder(parseInt(id));
        
        if (!deleted) {
            throw new APIErrorResponse('Order not found', 404);
        }

        return ApiResponseHandler.sendSuccess(
            res,
            null,
            'Order deleted successfully'
        );
    });

    static getOrdersByUserId = asyncWrapper(async (req: Request, res: Response): Promise<Response<SuccessResponse<OrderResponseDto[]> | ErrorResponse>> => {
        const { userId } = req.params;
        const orders = await OrderService.getOrdersByUserId(parseInt(userId));
        
        return ApiResponseHandler.sendSuccess(
            res,
            orders,
            'Orders retrieved successfully'
        );
    });

    static getOrdersByProductId = asyncWrapper(async (req: Request, res: Response): Promise<Response<SuccessResponse<OrderResponseDto[]> | ErrorResponse>> => {
        const { productId } = req.params;
        const orders = await OrderService.getOrdersByProductId(parseInt(productId));
        
        return ApiResponseHandler.sendSuccess(
            res,
            orders,
            'Orders retrieved successfully'
        );
    });
}
