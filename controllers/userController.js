// controllers/userController.js
import User from '../models/User.js';

// Create a new user
export const createUser = async (req, res) => {
  const { name, email, password, phone, address } = req.body;
  
  try {
    const newUser = new User({ name, email, password, phone, address });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    if (error.code === 11000 && error.keyPattern && error.keyValue) {
      // MongoDB duplicate key error
      return res.status(400).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a user by ID
export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a user by ID
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;


  try {
    const updatedUser = await User.findByIdAndUpdate(id, { username, email, password }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    if (error.code === 11000 && error.keyPattern && error.keyValue) {
      // MongoDB duplicate key error
      return res.status(400).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
