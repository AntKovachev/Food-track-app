// controllers/foodController.js
const Food = require('../models/Food');

// Add food entry
const addFood = async (req, res) => {
  const { name, calories, protein, fat } = req.body;

  try {
    const newFood = new Food({ name, calories, protein, fat, user: req.user.id });
    await newFood.save();

    res.status(201).json(newFood);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get food entries for a user
const getFoodEntries = async (req, res) => {
  try {
    const foodEntries = await Food.find({ user: req.user.id });
    res.json(foodEntries);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { addFood, getFoodEntries };
