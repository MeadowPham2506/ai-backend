import { Router } from 'express';
import { asyncWrapper } from '@src/utils/async-wrapper.util';
import ProductController from '@src/controllers/product.controller';

const router = Router();

/**
 * @route GET /api/v1/products
 * @desc Get all products with pagination and filtering
 * @access Public
 */
router.get('/', asyncWrapper(ProductController.getProducts));

/**
 * @route GET /api/v1/products/:id
 * @desc Get product by ID
 * @access Public
 */
router.get('/:id(\\d+)', asyncWrapper(ProductController.getProductById));

/**
 * @route POST /api/v1/products
 * @desc Create a new product
 * @access Public
 */
router.post('/', asyncWrapper(ProductController.createProduct));

/**
 * @route PUT /api/v1/products/:id
 * @desc Update product by ID
 * @access Public
 */
router.put('/:id(\\d+)', asyncWrapper(ProductController.updateProduct));

/**
 * @route DELETE /api/v1/products/:id
 * @desc Delete product by ID
 * @access Public
 */
router.delete('/:id(\\d+)', asyncWrapper(ProductController.deleteProduct));

export default router;
