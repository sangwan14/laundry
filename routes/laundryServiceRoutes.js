// routes/laundryServiceRoutes.js
import express from 'express';
import auth from '../middleware/auth.js';
import { createLaundryService, getLaundryService, updateLaundryService, deleteLaundryService } from '../controllers/laundryServiceController.js';

const router = express.Router();

router.post('/', auth, createLaundryService); // POST /laundry-service
router.get('/:id', auth, getLaundryService); // GET /laundry-service/:id
router.put('/:id', auth, updateLaundryService); // PUT /laundry-service/:id
router.delete('/:id', auth, deleteLaundryService); // DELETE /laundry-service/:id

export default router;
