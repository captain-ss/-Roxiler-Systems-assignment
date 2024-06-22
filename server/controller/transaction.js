const transactionModel = require("../model/transaction");
const axios = require("axios");

module.exports = {
  getAllTransaction: async function (req, res) {
    try {
      const data = req.query;
      const condition = {};

      if (data.search && data.search !== "") {
        const searchRegex = new RegExp(
          data.search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
          "i"
        );
        condition.$or = [
          { title: searchRegex },
          { description: searchRegex },
          { price: searchRegex },
        ];
      }
      const limit = Number(data.limit) || 10;
      const offset = (Number(data.offset) || 0) * limit;

      let transactions = await transactionModel.aggregate([
        {
          $match: condition,
        },
        {
          $sort: { createdAt: -1 },
        },
        {
          $skip: offset,
        },
        {
          $limit: limit,
        },
      ]);
      if (!transactions) {
        transactions = transactionModel.find();
        return res.status(200).json({
          msg: "No Transaction Found",
          transactions: transactions,
        });
      }
      return res.status(200).json({
        msg: "Transaction found",
        transactions: transactions,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Internal Server Error",
        error: error.toString(),
      });
    }
  },
  getChartData: async function (req, res) {
    
  },
};
