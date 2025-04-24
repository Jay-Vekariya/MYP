import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SlipDisplay from '../components/SlipDisplay';
import PropertiesContext from '../context/PropertiesContext';
import ExpensesContext from '../context/ExpensesContext';

const AddExpense = () => {
  const { properties } = useContext(PropertiesContext);
  const { addExpense, getExpenses, removeExpense } = useContext(ExpensesContext);

  const [expenseData, setExpenseData] = useState({
    type: '',
    amount: '',
    date: '',
    description: '',
    property: '',
    paidBy: '',
    paymentMethod: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpenseData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = { 
      ...expenseData, 
      id: Date.now(),
      amount: parseFloat(expenseData.amount) // Ensure amount is a number
    };
    addExpense(newExpense);
    setExpenseData({
      type: '',
      amount: '',
      date: '',
      description: '',
      property: '',
      paidBy: '',
      paymentMethod: ''
    });
  };

  return (
    <PageLayout>
      <div className="p-6 mt-16">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">ADD EXPENSE</h1>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Save Expense
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Expense Type</label>
              <select 
                className="w-full p-3 border rounded"
                name="type"
                value={expenseData.type}
                onChange={handleInputChange}
              >
                <option value="">Select Type</option>
                <option value="maintenance">Maintenance</option>
                <option value="utilities">Utilities</option>
                <option value="repairs">Repairs</option>
                <option value="supplies">Supplies</option>
              </select>
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Amount</label>
              <input 
                className="w-full p-3 border rounded" 
                placeholder="Enter Amount" 
                type="number"
                name="amount"
                value={expenseData.amount}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Date</label>
              <input 
                className="w-full p-3 border rounded" 
                type="date"
                name="date"
                value={expenseData.date}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea 
                className="w-full p-3 border rounded h-32" 
                placeholder="Enter Expense Description"
                name="description"
                value={expenseData.description}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Property</label>
              <select 
                className="w-full p-3 border rounded"
                name="property"
                value={expenseData.property}
                onChange={handleInputChange}
              >
                <option value="">Select Property</option>
                {properties.map(property => (
                  <option key={property.id} value={property.id}>
                    {property.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Paid By</label>
              <input 
                className="w-full p-3 border rounded" 
                placeholder="Enter Payer Name" 
                type="text"
                name="paidBy"
                value={expenseData.paidBy}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Payment Method</label>
              <select 
                className="w-full p-3 border rounded"
                name="paymentMethod"
                value={expenseData.paymentMethod}
                onChange={handleInputChange}
              >
                <option value="">Select Method</option>
                <option value="cash">Cash</option>
                <option value="credit_card">Credit Card</option>
                <option value="bank_transfer">Bank Transfer</option>
              </select>
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Receipt</label>
              <div className="border-2 border-dashed border-blue-400 p-5 text-center rounded">
                <i className="fas fa-upload text-blue-400 text-2xl mb-3"></i>
                <p className="text-gray-400 mb-3">Drop your files here</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Choose File
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {getExpenses().map((slip) => (
            <div key={slip.id} className="bg-white p-4 rounded-lg shadow">
              <SlipDisplay expense={slip} />
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-2"
                onClick={() => removeExpense(slip.id)}
              >
                Remove Slip
              </button>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default AddExpense;
