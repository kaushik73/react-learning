const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/restaurants", require("./routes/restaurants"));
app.use("/api/orders", require("./routes/orders"));

module.exports = app;
