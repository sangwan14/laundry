// routes/adminRoutes.js
import express from 'express';
import { createAdmin, getAdmin, updateAdmin, deleteAdmin } from '../controllers/adminController.js';

const router = express.Router();

router.post('/', createAdmin); // POST /admin
router.get('/:id', getAdmin); // GET /admin/:id
router.put('/:id', updateAdmin); // PUT /admin/:id
router.delete('/:id', deleteAdmin); // DELETE /admin/:id

export default router;
