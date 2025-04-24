import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; // Import the database connection function
import signupController from "./controllers/signupController.js";
import loginController from "./controllers/loginController.js"; // Import the login controller

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
const PORT = process.env.PORT || 3000;

const router = express.Router();
router.post("/api/signup/", signupController); // Define the signup route
router.post("/api/login/", loginController); // Define the login route

app.use(express.json()); // Middleware to parse JSON requests
app.use("/", router); // Use the router

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
