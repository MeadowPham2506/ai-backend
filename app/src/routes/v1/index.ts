import { Router } from 'express';
import ProductRoutes from '@src/routes/v1/product.route';
import EmployeeRoutes from '@src/routes/v1/employee.route';
import MeetingRoutes from '@src/routes/v1/meeting.route';
import OrderRoutes from '@src/routes/v1/order.route';

const router = Router();

router.use('/products', ProductRoutes);
router.use('/employees', EmployeeRoutes);
router.use('/meetings', MeetingRoutes);
router.use('/orders', OrderRoutes);

export default router;
