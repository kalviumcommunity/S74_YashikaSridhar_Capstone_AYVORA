import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import { connectDB } from "./config/db.js";

// Load environment variables
dotenv.config();

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads")); // serves uploaded images

// ✅ Mount routes
app.use("/api/foods", foodRouter);
app.use("/api/user", userRouter); // important for /register & /login

// ✅ Default route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// ✅ Start server only after MongoDB connects
const startServer = async () => {
  try {
    await connectDB(); // Connect to MongoDB
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () =>
      console.log(`✅ Server running on port ${PORT} and connected to MongoDB`)
    );
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error.message);
    process.exit(1);
  }
};

startServer();
