const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nutrients: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
});

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;
