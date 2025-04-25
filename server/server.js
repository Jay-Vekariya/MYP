import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import signupController from "./controllers/signupController.js";
import loginController from "./controllers/loginController.js";
import verifyToken from "./middlewares/verifyToken.middleware.js";

import {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
} from "./controllers/contactsCotroller.js";

import {
  createExpense,
  getExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
} from "./controllers/expenseController.js";

import {
  createProperty,
  getProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
} from "./controllers/propertyController.js";

import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

// ✅ Move this before any middleware that parses body
connectDB(app);

// ✅ Place parsers and cookie handler after CORS but before routes
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

const router = express.Router();

router.post("/api/signup/", signupController);
router.post("/api/login/", loginController);

// Contact routes
router.post("/api/contacts/", verifyToken, createContact);
router.get("/api/contacts/", verifyToken, getAllContacts);
router.get("/api/contacts/:id", verifyToken, getContactById);
router.put("/api/contacts/:id", verifyToken, updateContact);
router.delete("/api/contacts/:id", verifyToken, deleteContact);

// Expense routes
router.post("/api/expense/", verifyToken, createExpense);
router.get("/api/expense/", verifyToken, getExpenses);
router.get("/api/expense/:id", verifyToken, getExpenseById);
router.put("/api/expense/:id", verifyToken, updateExpense);
router.delete("/api/expense/:id", verifyToken, deleteExpense);

// Property routes
router.post("/api/property/", verifyToken, createProperty);
router.get("/api/property/", verifyToken, getProperties);
router.get("/api/property/:id", verifyToken, getPropertyById);
router.put("/api/property/:id", verifyToken, updateProperty);
router.delete("/api/property/:id", verifyToken, deleteProperty);

// ✅ Attach the router at the end
app.use("/", router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
