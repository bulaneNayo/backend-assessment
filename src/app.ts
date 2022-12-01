require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
import userRoutes from "./routes/user";
//import storyRoutes from "./routes/story";
const bodyParser = require("body-parser");
const mongoSanitize = require("express-mongo-sanitize");

const app = express();
/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
const BASE_URL = "/api/v1";

//sanitize requests against special chars, some precaution against NoSQL Injection Attacks
app.use(mongoSanitize());

// PORT
const listenPort = 5000;

//Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});
const database = (module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    mongoose
      .connect(
        "mongodb+srv://bulane:Qxkz3TSXCnckLuTd@cluster0.tfkhwlu.mongodb.net/?retryWrites=true&w=majority",
        connectionParams
      )
      .then(
        () => {
          console.log("Database is connected");
        },
        (err) => {
          console.log("Can not connect to the database" + err);
        }
      );
  } catch (error) {
    console.log("Failed to connect database!");
  }
});
database();

//user routes
app.use(`${BASE_URL}/user`, userRoutes);
app.use(`${BASE_URL}/user/login`, userRoutes);

app.listen(listenPort, () => {
  console.log(`Server running at http://localhost:${listenPort}`);
});

module.exports = app;
