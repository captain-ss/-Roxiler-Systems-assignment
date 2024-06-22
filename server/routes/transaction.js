const router = require("express").Router();
const transactionCont = require("../controller/transaction");


router.get("/transaction", transactionCont.getAllTransaction);
router.get("/transactionChartData", transactionCont.getChartData);

module.exports = router;
