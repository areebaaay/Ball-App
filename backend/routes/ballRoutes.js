import express from 'express';
import { admin, protect } from '../middleware/authMiddleware.js';
const router = express.Router();

import {
  createBall,
  deleteBall,
  getBalls,
  ownBall,
  returnBall,
} from '../controllers/ballController.js';

router.route('/').get(getBalls).post(protect, admin, createBall);

router.route('/:id').delete(protect, admin, deleteBall);

router.route('/own/:ball_id').patch(protect, ownBall);

router.route('/return/:ball_id').patch(protect, returnBall);

export default router;
