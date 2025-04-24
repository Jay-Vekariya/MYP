import React from 'react';

const WorkerCard = ({ worker, onEdit, onRemove }) => {
  if (!worker) {
    return null; // or return a placeholder component
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img 
        src={worker.profilePicture || "https://placehold.co/300x200"} 
        alt="Profile" 
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{worker.fullName || 'No Name'}</h3>
      <p className="text-gray-600">Role: {worker.position || 'Not Specified'}</p>
      <p className="text-gray-600">Contact: {worker.phone || 'Not Available'}</p>
      <p className="text-gray-600">Status: {worker.status || 'Unknown'}</p>
      <div className="mt-4">
        <button onClick={() => onEdit(worker.id)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
        <button onClick={() => onRemove(worker.id)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
      </div>
    </div>
  );
};






export default WorkerCard;
