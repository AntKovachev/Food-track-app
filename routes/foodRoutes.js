const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// Get all foods
router.get('/', async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a food item
router.post('/', async (req, res) => {
  const { name, nutrients, calories } = req.body;

  try {
    const food = new Food({ name, nutrients, calories });
    await food.save();
    res.status(201).json(food);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
