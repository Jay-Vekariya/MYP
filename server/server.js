import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; // Import the database connection function
import signupController from "./controllers/signupController.js";
import loginController from "./controllers/loginController.js"; // Import the login controller
// import verifyToken from "./middlewares/verifyToken.middleware.js";

import {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
} from "./controllers/contactsCotroller.js"; // Import the contact controller

import {
  createExpense,
  getExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
} from "./controllers/expenseController.js"; // Import the expense controller

import {
  createProperty,
  getProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
} from "./controllers/propertyController.js"; // Import the property controller

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
const PORT = process.env.PORT || 3000;

const router = express.Router();
router.post("/api/signup/", signupController); // Define the signup route
router.post("/api/login/", loginController); // Define the login route

// Define the contact routes
router.post("/api/contacts/", createContact); // Define the create contact route
router.get("/api/contacts/", getAllContacts); // Define the get all contacts route
router.get("/api/contacts/:id", getContactById); // Definethe get contact by ID route
router.put("/api/contacts/:id", updateContact); // Define the update contact route
router.delete("/api/contacts/:id", deleteContact); // Define the delete contact route

//expense routes
router.post("/api/expense/", createExpense); // Define the create expense route
router.get("/api/expense/", getExpenses); // Define the get all expenses route
router.get("/api/expense/:id", getExpenseById); // Define the get expense by ID route
router.put("/api/expense/:id", updateExpense); // Define the update expense route
router.delete("/api/expense/:id", deleteExpense); // Define the delete expense route

//property routes
router.post("/api/property/", createProperty); // Define the create property route
router.get("/api/property/", getProperties); // Define the get all properties route
router.get("/api/property/:id", getPropertyById); // Define the get property by ID route
router.put("/api/property/:id", updateProperty); // Define the update property route
router.delete("/api/property/:id", deleteProperty); // Define the delete property route

app.use(express.json()); // Middleware to parse JSON requests
app.use("/", router); // Use the router

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
