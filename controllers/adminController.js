// controllers/adminController.js
import Admin from '../models/Admin.js';

// Create a new admin
export const createAdmin = async (req, res) => {
  const { username, password, role } = req.body;
  
  try {
    const newAdmin = new Admin({ username, password, role });
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    console.error('Error creating admin:', error);
    if (error.code === 11000 && error.keyPattern && error.keyValue) {
      // MongoDB duplicate key error
      return res.status(400).json({ error: 'Username already exists' });
    }
    res.status(500).json({ error: 'Server error' });
  }
};

// Get an admin by ID
export const getAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    const admin = await Admin.findById(id);
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }
    res.json(admin);
  } catch (error) {
    console.error('Error fetching admin:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update an admin by ID
export const updateAdmin = async (req, res) => {
  const { id } = req.params;
  const { username, password, role } = req.body;

  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(id, { username, password, role }, { new: true });
    if (!updatedAdmin) {
      return res.status(404).json({ error: 'Admin not found' });
    }
    res.json(updatedAdmin);
  } catch (error) {
    console.error('Error updating admin:', error);
    if (error.code === 11000 && error.keyPattern && error.keyValue) {
      // MongoDB duplicate key error
      return res.status(400).json({ error: 'Username already exists' });
    }
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete an admin by ID
export const deleteAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAdmin = await Admin.findByIdAndDelete(id);
    if (!deletedAdmin) {
      return res.status(404).json({ error: 'Admin not found' });
    }
    res.json({ message: 'Admin deleted successfully' });
  } catch (error) {
    console.error('Error deleting admin:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
