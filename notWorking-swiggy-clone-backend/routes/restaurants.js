const express = require("express");
const router = express.Router();
const {
  getRestaurants,
  addRestaurant,
} = require("../controllers/restaurantController");
const auth = require("../middleware/auth");

router.get("/", getRestaurants);
router.post("/", auth, addRestaurant);

module.exports = router;
