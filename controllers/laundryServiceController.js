// controllers/laundryServiceController.js
import LaundryService from '../models/LaundryService.js';

// Create a new laundry service order
export const createLaundryService = async (req, res) => {
  const { userId, numberOfJeans, numberOfTshirts, pickupAddress, deliveryAddress } = req.body;

  // Calculate final price based on number of jeans and t-shirts
  const jeansPrice = 5; // Example price per jeans
  const tshirtsPrice = 3; // Example price per t-shirt
  const finalPrice = numberOfJeans * jeansPrice + numberOfTshirts * tshirtsPrice;

  try {
    const newLaundryService = new LaundryService({
      userId,
      numberOfJeans,
      numberOfTshirts,
      finalPrice,
      pickupAddress,
      deliveryAddress
    });

    await newLaundryService.save();
    res.status(201).json(newLaundryService);
  } catch (error) {
    console.error('Error creating laundry service:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a laundry service order by ID
export const getLaundryService = async (req, res) => {
  const { id } = req.params;

  try {
    const laundryService = await LaundryService.findById(id);
    if (!laundryService) {
      return res.status(404).json({ error: 'Laundry service order not found' });
    }
    res.json(laundryService);
  } catch (error) {
    console.error('Error fetching laundry service:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a laundry service order by ID
export const updateLaundryService = async (req, res) => {
  const { id } = req.params;
  const { numberOfJeans, numberOfTshirts, pickupAddress, deliveryAddress } = req.body;

  try {
    const updatedLaundryService = await LaundryService.findByIdAndUpdate(id,
      { numberOfJeans, numberOfTshirts, pickupAddress, deliveryAddress },
      { new: true }
    );
    if (!updatedLaundryService) {
      return res.status(404).json({ error: 'Laundry service order not found' });
    }

    // Recalculate final price if necessary
    const jeansPrice = 5; // Example price per jeans
    const tshirtsPrice = 3; // Example price per t-shirt
    updatedLaundryService.finalPrice = numberOfJeans * jeansPrice + numberOfTshirts * tshirtsPrice;
    await updatedLaundryService.save();

    res.json(updatedLaundryService);
  } catch (error) {
    console.error('Error updating laundry service:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a laundry service order by ID
export const deleteLaundryService = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedLaundryService = await LaundryService.findByIdAndDelete(id);
    if (!deletedLaundryService) {
      return res.status(404).json({ error: 'Laundry service order not found' });
    }
    res.json({ message: 'Laundry service order deleted successfully' });
  } catch (error) {
    console.error('Error deleting laundry service:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
