require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
import userRoutes from "./routes/user";
import storyRoutes from "./routes/story";
const bodyParser = require("body-parser");
const mongoSanitize = require("express-mongo-sanitize");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Minority Africa Advance backend  API",
      description: "Advance API documentation",
      contact: {
        name: "Minority Africa",
      },
      servers: [process.env.DEPLOYED_APP],
    },
  },

  apis: ["functionsdocs/endpoints.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

//user routes
app.use(`${BASE_URL}/user`, userRoutes);
app.use(`${BASE_URL}/user/login`, userRoutes);

//stories endpoints
app.use(`${BASE_URL}/story`, storyRoutes);
app.use(`${BASE_URL}/story/publish`, storyRoutes);
app.use(`${BASE_URL}/story/unpublish`, storyRoutes);
app.use(`${BASE_URL}/story/republish`, storyRoutes);
app.use(`${BASE_URL}/story/update`, storyRoutes);
app.use(`${BASE_URL}/story/update/popularity`, storyRoutes);
app.use(`${BASE_URL}/story/popular`, storyRoutes);
app.use(`${BASE_URL}/story/single/popular`, storyRoutes);
app.use(`${BASE_URL}/story/single`, storyRoutes);


// app.listen(listenPort, () => {
//   console.log(`Server running at http://localhost:${listenPort}`);
// });

module.exports.handler = serverless(app);
