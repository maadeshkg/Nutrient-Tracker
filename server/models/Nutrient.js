const mongoose = require("mongoose");

const nutrientSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  foodName: String,
  nutrients: Object,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Nutrient", nutrientSchema);

