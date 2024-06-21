const mongoose = require("mongoose");
let objectId = mongoose.Schema.Types.ObjectId;
const transactionSchema = new mongoose.Schema(
  {
    rating: {
      price: Number,
      require: true,
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
