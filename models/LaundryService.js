// models/LaundryService.js
import mongoose from 'mongoose';

const laundryServiceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user
  numberOfJeans: { type: Number, required: true },
  numberOfTshirts: { type: Number, required: true },
  finalPrice: { type: Number, required: true },
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
  status: { type: String, enum: ['pending', 'in_progress', 'completed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('LaundryService', laundryServiceSchema);
