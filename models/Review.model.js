const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },
    beach: String, // this is an id
    content: String,
    date: Date,
    rating: { type: Number, min: 1.0, max: 5.0 },
  }
);

module.exports = model("Review", reviewSchema);
