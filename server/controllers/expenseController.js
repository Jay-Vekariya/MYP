import {
  createExpenseService,
  getAllExpensesService,
  getExpenseByIdService,
  updateExpenseService,
  deleteExpenseService,
} from "../services/expenseServices.js"; // Corrected file name

export const createExpense = async (req, res) => {
  try {
    const result = await createExpenseService(req.body);
    res.status(result.statusCode).json(result);
  } catch (error) {
    res.status(500).json({ Success: false, message: error.message });
  }
};

export const getExpenses = async (req, res) => {
  try {
    const expenses = await getAllExpensesService();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ Success: false, message: error.message });
  }
};

export const getExpenseById = async (req, res) => {
  try {
    const expense = await getExpenseByIdService(req.params.id);
    if (!expense) {
      return res
        .status(404)
        .json({ Success: false, message: "Expense not found" });
    }
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ Success: false, message: error.message });
  }
};

export const updateExpense = async (req, res) => {
  try {
    const updatedExpense = await updateExpenseService(req.params.id, req.body);
    res.status(200).json(updatedExpense);
  } catch (error) {
    res.status(500).json({ Success: false, message: error.message });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    const result = await deleteExpenseService(req.params.id);
    res.status(result.statusCode).json(result);
  } catch (error) {
    res.status(500).json({ Success: false, message: error.message });
  }
};
