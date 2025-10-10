import { Request, Response } from 'express';
import asyncWrapper from '@src/utils/async-wrapper.util';
import OrderService from '@src/services/order.service';
import {
    GetOrdersQueryDto,
    CreateOrderDto,
    OrderResponseDto
} from '@src/types/dtos/order.dto';
import { ApiResponseHandler } from '@src/core/response.core';
import { PaginatedResponse } from '@src/types/dtos';

export default class OrderController {
    /**
     * Get all orders with optional filters and pagination
     * @route GET /api/v1/orders
     */
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

    /**
     * Create a new order
     * @route POST /api/v1/orders
     */
    static createOrder = asyncWrapper(async (req: Request, res: Response): Promise<Response<OrderResponseDto>> => {
        const orderData: CreateOrderDto = req.body;
        const order = await OrderService.createOrder(orderData);

        return ApiResponseHandler.sendSuccess(
            res,
            order,
            'Order created successfully',
            201
        );
    });
}
