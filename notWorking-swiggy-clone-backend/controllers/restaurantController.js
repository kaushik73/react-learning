const Restaurant = require("../models/Restaurant");

exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.addRestaurant = async (req, res) => {
  const { name, address, cuisine, menu } = req.body;
  try {
    const newRestaurant = new Restaurant({ name, address, cuisine, menu });
    const restaurant = await newRestaurant.save();
    res.json(restaurant);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
