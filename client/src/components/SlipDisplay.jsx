import React from 'react';

const SlipDisplay = ({ expense }) => {
  const handlePrint = () => {
    const printWindow = window.open('', 'PRINT', 'height=600,width=800');
    printWindow.document.write(`
      <html>
        <head>
          <title>Expense Slip</title>
          <style>
            body { font-family: Arial, sans-serif; }
            .slip-container { padding: 20px; border: 1px solid #ccc; }
            .slip-header { font-size: 18px; font-weight: bold; margin-bottom: 15px; }
            .slip-row { display: flex; justify-content: space-between; margin: 5px 0; }
            .slip-label { font-weight: bold; }
            .print-button { display: none; }
          </style>

        </head>
        <body>
          <div class="slip-container">
            ${document.getElementById(`slip-${expense.id}`).innerHTML.replace('print-button', 'print-button hidden')}

          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };


  return (
    <div id={`slip-${expense.id}`} className="bg-white p-6 rounded-lg shadow-md mt-6">


      <h2 className="text-xl font-bold mb-4">Expense Slip</h2>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="font-medium">Expense Type:</span>
          <span>{expense.type}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Amount:</span>
          <span>${expense.amount}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Date:</span>
          <span>{expense.date}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Property:</span>
          <span>{expense.property}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Paid By:</span>
          <span>{expense.paidBy}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Payment Method:</span>
          <span>{expense.paymentMethod}</span>
        </div>
        <div className="mt-4">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 print-button"

            onClick={handlePrint}

          >
          Print Slip
        </button>
      </div>


    </div>


    </div>
  ); 
};

export default SlipDisplay;
