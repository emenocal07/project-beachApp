const { Schema, model } = require("mongoose");

const reviewSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.String, ref: "User" },
  content: String,
  date: Date,
  rating: { type: Number, min: 1.0, max: 5.0 },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = model("Review");
