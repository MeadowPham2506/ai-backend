import { Router } from 'express';
import ProductRoutes from '@src/routes/v1/product.route';
import UserRoutes from '@src/routes/v1/user.route';
import OrderRoutes from '@src/routes/v1/order.route';

const router = Router();

router.use('/products', ProductRoutes);
router.use('/users', UserRoutes);
router.use('/orders', OrderRoutes);

export default router;
