// controllers/pickupController.js
import Pickup from '../models/Pickup.js';

// Schedule a new pickup
export const schedulePickup = async (req, res) => {
  const { userId, orderId, pickupDateTime, pickupAddress, deliveryAddress } = req.body;

  try {
    const newPickup = new Pickup({ userId, orderId, pickupDateTime, pickupAddress, deliveryAddress });
    await newPickup.save();
    res.status(201).json(newPickup);
  } catch (error) {
    console.error('Error scheduling pickup:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a pickup by ID
export const getPickup = async (req, res) => {
  const { id } = req.params;

  try {
    const pickup = await Pickup.findById(id);
    if (!pickup) {
      return res.status(404).json({ error: 'Pickup not found' });
    }
    res.json(pickup);
  } catch (error) {
    console.error('Error fetching pickup:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a pickup by ID
export const updatePickup = async (req, res) => {
  const { id } = req.params;
  const { status, deliveryDateTime } = req.body;

  try {
    const updatedPickup = await Pickup.findByIdAndUpdate(id, { status, deliveryDateTime }, { new: true });
    if (!updatedPickup) {
      return res.status(404).json({ error: 'Pickup not found' });
    }
    res.json(updatedPickup);
  } catch (error) {
    console.error('Error updating pickup:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a pickup by ID
export const deletePickup = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPickup = await Pickup.findByIdAndDelete(id);
    if (!deletedPickup) {
      return res.status(404).json({ error: 'Pickup not found' });
    }
    res.json({ message: 'Pickup deleted successfully' });
  } catch (error) {
    console.error('Error deleting pickup:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
