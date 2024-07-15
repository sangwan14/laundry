// index.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from "morgan";
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import laundryServiceRoutes from './routes/laundryServiceRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import pickupRoutes from './routes/pickupRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/laundry-service', laundryServiceRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/pickup', pickupRoutes);
app.use('/api/auth', authRoutes);

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
