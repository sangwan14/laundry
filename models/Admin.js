// models/Admin.js
import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'superadmin'], default: 'admin' }, // Example roles
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Admin', adminSchema);
