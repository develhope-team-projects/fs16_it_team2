const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  img: String,
  name: String,
  paragraph: String,
});

const Review = mongoose.model('Review', reviewSchema, 'reviews');

module.exports = Review;
