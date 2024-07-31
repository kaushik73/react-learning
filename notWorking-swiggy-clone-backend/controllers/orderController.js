const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
  const { user, restaurant, items, totalAmount } = req.body;
  try {
    const newOrder = new Order({ user, restaurant, items, totalAmount });
    const order = await newOrder.save();
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate(
      "restaurant"
    );
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
