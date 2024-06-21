const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema(
  {
    rating: {
      price: Number,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    image: {
      type: String,
    },
    sold: {
      type: Boolean,
    },
    dateOfSale: {
      type: Date,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("transaction", transactionSchema);
