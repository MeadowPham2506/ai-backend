import { Router } from 'express';
import ProductController from '@src/controllers/product.controller';

const router = Router();

router.get('/', ProductController.getProducts);
router.get('/:id(\\d+)', ProductController.getProductById);
router.post('/', ProductController.createProduct);
router.put('/:id(\\d+)', ProductController.updateProduct);

export default router;
