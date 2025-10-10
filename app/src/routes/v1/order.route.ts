import { Router } from 'express';
import OrderController from '@src/controllers/order.controller';

const router = Router();

/**
 * @route GET /api/v1/orders
 * @desc Get all orders with optional filters (employee_code, product_id) and pagination
 * @access Public
 */
router.get('/', OrderController.getOrders);

/**
 * @route POST /api/v1/orders
 * @desc Create a new order
 * @body { employee_code, product_id, quantity, purpose }
 * @access Public
 */
router.post('/', OrderController.createOrder);

export default router;
