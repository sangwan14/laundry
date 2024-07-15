// models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user
  laundryServiceId: { type: mongoose.Schema.Types.ObjectId, ref: 'LaundryService', required: true }, // Reference to the laundry service
  status: { type: String, enum: ['pending', 'confirmed', 'completed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Order', orderSchema);
