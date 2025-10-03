import { Router } from 'express';
import OrderController from '@src/controllers/order.controller';

const router = Router();

/**
 * @route GET /api/v1/orders
 * @desc Get all orders with pagination and filtering
 * @access Public
 * @query {number} page - Page number (default: 1)
 * @query {number} limit - Items per page (default: 10)
 * @query {number} user_id - Filter by user ID
 * @query {number} product_id - Filter by product ID
 * @query {string} sortBy - Sort by field (quantity, created_at, updated_at)
 * @query {string} sortOrder - Sort order (asc, desc)
 * @query {string} dateFrom - Filter orders from date (YYYY-MM-DD)
 * @query {string} dateTo - Filter orders to date (YYYY-MM-DD)
 */
router.get('/', OrderController.getOrders);

/**
 * @route GET /api/v1/orders/:id
 * @desc Get order by ID
 * @access Public
 * @param {number} id - Order ID
 */
router.get('/:id(\\d+)', OrderController.getOrderById);

/**
 * @route GET /api/v1/orders/user/:userId
 * @desc Get orders by user ID
 * @access Public
 * @param {number} userId - User ID
 */
router.get('/user/:userId(\\d+)', OrderController.getOrdersByUserId);

/**
 * @route GET /api/v1/orders/product/:productId
 * @desc Get orders by product ID
 * @access Public
 * @param {number} productId - Product ID
 */
router.get('/product/:productId(\\d+)', OrderController.getOrdersByProductId);

/**
 * @route POST /api/v1/orders
 * @desc Create a new order
 * @access Public
 * @body {number} user_id - User ID (required)
 * @body {number} product_id - Product ID (required)
 * @body {number} quantity - Order quantity (required)
 * @body {string} purpose - Order purpose (optional)
 */
router.post('/', OrderController.createOrder);

/**
 * @route PUT /api/v1/orders/:id
 * @desc Update order by ID
 * @access Public
 * @param {number} id - Order ID
 * @body {number} user_id - User ID (optional)
 * @body {number} product_id - Product ID (optional)
 * @body {number} quantity - Order quantity (optional)
 * @body {string} purpose - Order purpose (optional)
 */
router.put('/:id(\\d+)', OrderController.updateOrder);

/**
 * @route DELETE /api/v1/orders/:id
 * @desc Delete order by ID
 * @access Public
 * @param {number} id - Order ID
 */
router.delete('/:id(\\d+)', OrderController.deleteOrder);

export default router;