import { Router } from 'express';
import UserController from '@src/controllers/user.controller';

const router = Router();

/**
 * @route GET /api/v1/users
 * @desc Get all users with pagination and filtering
 * @access Public
 * @query {number} page - Page number (default: 1)
 * @query {number} limit - Items per page (default: 10)
 * @query {string} search - Search by user name
 * @query {string} sortBy - Sort by field (name, created_at, updated_at)
 * @query {string} sortOrder - Sort order (asc, desc)
 */
router.get('/', UserController.getUsers);

/**
 * @route GET /api/v1/users/:id
 * @desc Get user by ID
 * @access Public
 * @param {number} id - User ID
 */
router.get('/:id(\\d+)', UserController.getUserById);

/**
 * @route POST /api/v1/users
 * @desc Create a new user
 * @access Public
 * @body {string} name - User name (required)
 */
router.post('/', UserController.createUser);

/**
 * @route PUT /api/v1/users/:id
 * @desc Update user by ID
 * @access Public
 * @param {number} id - User ID
 * @body {string} name - User name (optional)
 */
router.put('/:id(\\d+)', UserController.updateUser);

/**
 * @route DELETE /api/v1/users/:id
 * @desc Delete user by ID
 * @access Public
 * @param {number} id - User ID
 */
router.delete('/:id(\\d+)', UserController.deleteUser);

export default router;