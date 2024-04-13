const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const app = express();
dotenv.config(); // Load .env file

// This line makes sure you can access the body of the request
app.use(express.json());

// Security pakages
const cors = require("cors");

// Import routes
const userRoutes = require("./routes/userRouter");
const dogRoutes = require("./routes/dogsRouter");

// Middleware
app.use(cors()); // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

// Routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/dogs", dogRoutes);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Database connected successfully!");

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1); // Exit the process with failure status
  }
};

start();
