// routes/pickupRoutes.js
import express from 'express';
import auth from '../middleware/auth.js';
import { schedulePickup, getPickup, updatePickup, deletePickup } from '../controllers/pickupController.js';

const router = express.Router();

router.post('/', auth, schedulePickup); // POST /pickup
router.get('/:id', auth, getPickup); // GET /pickup/:id
router.put('/:id', auth, updatePickup); // PUT /pickup/:id
router.delete('/:id', auth, deletePickup); // DELETE /pickup/:id

export default router;
