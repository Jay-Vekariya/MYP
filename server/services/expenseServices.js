import Expense from '../models/expense.model.js';

export const createExpenseService = async (expenseData) => {
  try {
    const newExpense = new Expense(expenseData);
    await newExpense.save();

    return {
      statusCode: 201,
      Success: true,
      message: 'Expense created successfully.',
    };
  } catch (error) {
    throw new Error(`Error in createExpenseService: ${error.message}`);
  }
};

export const getAllExpensesService = async () => {
  try {
    const expenses = await Expense.find().populate('property');
    return expenses;
  } catch (error) {
    throw new Error(`Error in getAllExpensesService: ${error.message}`);
  }
};

export const getExpenseByIdService = async (id) => {
  try {
    return await Expense.findById(id).populate('property');
  } catch (error) {
    throw new Error(`Error in getExpenseByIdService: ${error.message}`);
  }
};

export const updateExpenseService = async (id, updatedData) => {
  try {
    return await Expense.findByIdAndUpdate(id, updatedData, { new: true });
  } catch (error) {
    throw new Error(`Error in updateExpenseService: ${error.message}`);
  }
};

export const deleteExpenseService = async (id) => {
  try {
    await Expense.findByIdAndDelete(id);
    return {
      statusCode: 200,
      Success: true,
      message: 'Expense deleted successfully.',
    };
  } catch (error) {
    throw new Error(`Error in deleteExpenseService: ${error.message}`);
  }
};
