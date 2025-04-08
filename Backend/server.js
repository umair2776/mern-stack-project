// Import required modules
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const cloudinary = require('cloudinary').v2;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productRouter = require("./routes/product.route");
const userRouter=require("./routes/user.route")

// Initialize the app
const app = express();

// Load environment variables from the .env file
dotenv.config();

// MongoDB URI and PORT
const PORT = process.env.PORT || 2000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch(err => {
    console.log("Error connecting to MongoDB:", err);
  });


// Configure Cloudinary with credentials from environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure multer for image upload in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middlewares
app.use(express.json());
app.use(cors());

// Product route
app.use("/api/admin/product", upload.single('image'), productRouter);
app.use("/api/admin/user", userRouter);



// Start server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
