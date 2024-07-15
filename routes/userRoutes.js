// routes/userRoutes.js
import express from 'express';
import auth from '../middleware/auth.js';
import { getUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/:id', auth, getUser); // GET /user/:id
router.put('/:id', auth, updateUser); // PUT /user/:id
router.delete('/:id', auth, deleteUser); // DELETE /user/:id

export default router;
