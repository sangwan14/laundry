// models/Pickup.js
import mongoose from 'mongoose';

const pickupSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true }, // Reference to the order
  status: { type: String, enum: ['scheduled', 'picked_up', 'delivered'], default: 'scheduled' },
  pickupDateTime: { type: Date, required: true },
  deliveryDateTime: { type: Date },
  pickupAddress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true }
  },
  deliveryAddress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true }
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Pickup', pickupSchema);
