import { Router } from 'express';
import ProductRoutes from '@src/routes/v1/product.route';
import EmployeeRoutes from '@src/routes/v1/employee.route';
import MeetingRoutes from '@src/routes/v1/meeting.route';

const router = Router();

router.use('/products', ProductRoutes);
router.use('/employees', EmployeeRoutes);
router.use('/meetings', MeetingRoutes);

export default router;
