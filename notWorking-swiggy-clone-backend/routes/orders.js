const express = require("express");
const router = express.Router();
const { placeOrder, getUserOrders } = require("../controllers/orderController");
const auth = require("../middleware/auth");

router.post("/", auth, placeOrder);
router.get("/", auth, getUserOrders);

module.exports = router;
