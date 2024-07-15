// routes/orderRoutes.js
import express from 'express';
import auth from '../middleware/auth.js';
import { createOrder, getOrder, updateOrder, deleteOrder } from '../controllers/orderController.js';

const router = express.Router();

router.post('/', auth, createOrder); // POST /order
router.get('/:id', auth, getOrder); // GET /order/:id
router.put('/:id', auth, updateOrder); // PUT /order/:id
router.delete('/:id', auth, deleteOrder); // DELETE /order/:id

export default router;
