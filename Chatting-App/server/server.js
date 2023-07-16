const express = require("express");
require("dotenv").config();
const chatRoutes = require("./routes/chatRoutes");

const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
app.use(express.json()); //to accept json data

connectDB();

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

const port = 5000;

app.listen(port, console.log("server is listening"));
