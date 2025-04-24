import React, { useContext } from 'react';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card';
import WorkerContext from '../context/WorkerContext';
import ExpensesContext from '../context/ExpensesContext';
import PropertiesContext from '../context/PropertiesContext';

const Dashboard = () => {
  const { workers } = useContext(WorkerContext);
  const { totalExpenses } = useContext(ExpensesContext);
  const { properties } = useContext(PropertiesContext);

  return (
    <PageLayout>
      <div className="p-6 mt-16">
        <h1 className="mt-6 text-2xl font-bold">DASHBOARD</h1>
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
          <Card bgColor="bg-blue-500">
            <p className="text-white">Total Property</p>
            <p className="mt-2 text-3xl font-bold text-white">{properties.length}</p>
          </Card>
          <Card>
            <p className="text-gray-600">Total Workers</p>
            <p className="mt-2 text-3xl font-bold text-black">{workers.length}</p>
          </Card>
          <Card>
            <p className="text-gray-600">Total Income</p>
            <p className="mt-2 text-3xl font-bold text-black">₹56800.00</p>
          </Card>
          <Card>
            <p className="text-gray-600">Total Expenses</p>
            <p className="mt-2 text-3xl font-bold text-black">₹{totalExpenses.toFixed(2)}</p>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
          <Card>
            <h2 className="text-lg font-bold">Payment History</h2>
            <table className="w-full mt-4">
              <thead>
                <tr>
                  <th className="text-left">Payment Date</th>
                  <th className="text-left">Amount</th>
                  <th className="text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">September 2024</td>
                  <td className="py-2">₹4500.00</td>
                  <td className="py-2">Paid</td>
                </tr>
                <tr>
                  <td className="py-2">October 2024</td>
                  <td className="py-2">₹4000.00</td>
                  <td className="py-2">Paid</td>
                </tr>
                <tr>
                  <td className="py-2">November 2024</td>
                  <td className="py-2">₹5000.00</td>
                  <td className="py-2">Paid</td>
                </tr>
              </tbody>
            </table>
            <button className="px-4 py-2 mt-4 text-blue-500 border border-blue-500 rounded">
              See Invoices
            </button>
          </Card>
          <Card className="relative">
            <h2 className="text-lg font-bold">Maintenance Status</h2>
            <ul className="mt-4">
              <li className="flex justify-between py-2">
                <span>Request #001</span>
                <span className="text-yellow-500">In Progress</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Request #002</span>
                <span className="text-blue-500">Completed</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Request #002</span>
                <span className="text-red-500">Pending</span>
              </li>
            </ul>
            <img
              alt="Maintenance Icon"
              className="absolute bottom-4 right-4 opacity-10"
              height="100"
              src="https://storage.googleapis.com/a1aa/image/uakoCQcHvF67BzXDjbhyfmbnM-ReSks28RpK1uCXMzU.jpg"
              width="100"
            />
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
