import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  expenseType: {
    type: String,
    required: true,
    trim: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property',
    required: true,
  },
  paidBy: {
    type: String,
    required: true,
    trim: true,
  },
  paymentMethod: {
    type: String,
    required: true,
    trim: true,
  },
  receipt: {
    type: String, // Cloudinary URL or local path
    default: '',
  },
}, {
  timestamps: true,
});

const Expense = mongoose.model('Expense', expenseSchema);

export default Expense;
