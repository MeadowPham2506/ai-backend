import { GetOrdersQueryDto, CreateOrderDto } from "@src/types/dtos/order.dto";
import OrderRepository from "@src/repositories/order.repository";
import { APIErrorResponse } from '@src/core/response.core';

export default class OrderService {
    /**
     * Parse date from dd/mm/yyyy format to Date object
     */
    private static parseDateFromDDMMYYYY(dateString: string): Date {
        const parts = dateString.split('/');
        if (parts.length !== 3) {
            throw new APIErrorResponse('Invalid date format. Expected dd/mm/yyyy', 400);
        }

        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed
        const year = parseInt(parts[2], 10);

        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            throw new APIErrorResponse('Invalid date format. Expected dd/mm/yyyy', 400);
        }

        const date = new Date(year, month, day);

        // Validate the date is valid
        if (date.getDate() !== day || date.getMonth() !== month || date.getFullYear() !== year) {
            throw new APIErrorResponse('Invalid date value', 400);
        }

        return date;
    }

    /**
     * Get orders with pagination and filters
     */
    static async getOrders(query: GetOrdersQueryDto) {
        const page = query.page ? parseInt(query.page.toString()) : 1;
        const limit = query.limit ? parseInt(query.limit.toString()) : 10;

        // Validate pagination parameters
        if (page <= 0) {
            throw new APIErrorResponse('Page number must be greater than 0', 400);
        }

        if ((limit <= 0 || limit > 100) && limit !== -1) {
            throw new APIErrorResponse('Limit must be between 1 and 100', 400);
        }

        const { employee_code, start_date, end_date } = query;

        // Parse dates if provided
        let startDateObj: Date | undefined;
        let endDateObj: Date | undefined;

        if (start_date) {
            startDateObj = this.parseDateFromDDMMYYYY(start_date);
        }

        if (end_date) {
            endDateObj = this.parseDateFromDDMMYYYY(end_date);
        }

        // Validate date range
        if (startDateObj && endDateObj && startDateObj > endDateObj) {
            throw new APIErrorResponse('Start date cannot be after end date', 400);
        }

        const orders = await OrderRepository.getOrders(
            page, 
            limit, 
            employee_code, 
            startDateObj,
            endDateObj
        );
        
        const total = await OrderRepository.countOrders(employee_code, startDateObj, endDateObj);
        const totalPages = limit === -1 ? 1 : Math.ceil(total / limit);

        return {
            orders,
            pagination: {
                page,
                limit,
                total,
                totalPages
            }
        };
    }

    /**
     * Create a new order
     */
    static async createOrder(data: CreateOrderDto) {
        // Validate required fields
        if (!data.employee_code || data.employee_code.trim() === '') {
            throw new APIErrorResponse('Employee code is required', 400);
        }

        if (!data.product_id) {
            throw new APIErrorResponse('Product ID is required', 400);
        }
        const parsedProductId = Number(data.product_id);
        if (isNaN(parsedProductId) || parsedProductId <= 0) {
            throw new APIErrorResponse('Product ID must be a positive number', 400);
        }

        if (!data.quantity || data.quantity <= 0) {
            throw new APIErrorResponse('Quantity must be greater than 0', 400);
        }

        // Check if employee exists
        const employeeExists = await OrderRepository.employeeExists(data.employee_code);
        if (!employeeExists) {
            throw new APIErrorResponse('Employee not found', 404);
        }

        // Check if product exists and is active
        const productExists = await OrderRepository.productExists(data.product_id);
        if (!productExists) {
            throw new APIErrorResponse('Product not found or is not active', 404);
        }

        // Create the order
        const order = await OrderRepository.createOrder({
            employee_code: data.employee_code,
            product_id: data.product_id,
            quantity: data.quantity,
            purpose: data.purpose
        });

        return order;
    }
}
