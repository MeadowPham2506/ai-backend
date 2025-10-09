import { Router } from 'express';
import MeetingController from '@src/controllers/meeting.controller';

const router = Router();

router.get('/', MeetingController.getMeetingRooms);
router.get('/plan', MeetingController.getMeetingPlan);
router.post('/plan', MeetingController.createMeeting);

export default router;
