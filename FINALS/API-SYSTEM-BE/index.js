// Server Setup
const express = require("express");
const mongoose = require("mongoose");

// const port = 4000;
require("dotenv").config();
const app = express();


// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const userRoutes = require("./routes/User-Routes.js");



// MongoDB Connection
mongoose.connect(process.env.MONGODB_STRING);
mongoose.connection.once("open",() => console.log('Now connected to MongoBD Atlas'));

// Backend Routes
app.use("/users", userRoutes);

app.listen(process.env.PORT || 3000, () => console.log(`API is now connected on port ${process.env.PORT || 3000}`));