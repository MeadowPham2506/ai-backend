import { Router } from 'express';
import EmployeeController from '@src/controllers/employee.controller';

const router = Router();

router.get('/', EmployeeController.getEmployees);
router.post('/search-by-name', EmployeeController.searchEmployeesByName);

export default router;
