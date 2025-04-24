import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import WorkerCard from '../components/WorkerCard';
import WorkerContext from '../context/WorkerContext';
const Workers = () => {
  const { workers, removeWorker } = useContext(WorkerContext);

  console.log('Current workers:', workers); // Debugging log

  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="p-6 mt-16">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">WORKERS</h1>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            onClick={() => navigate('/add-worker')}
          >
            Add Worker
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {workers && workers.length > 0 ? (
            workers.map((worker) => (
              <WorkerCard
                key={worker.id}
                worker={worker}
                onEdit={() => navigate(`/edit-worker/${worker.id}`)}
                onRemove={() => {
                  console.log(`Removing worker with id: ${worker.id}`);
                  removeWorker(worker.id);
                }}


              />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-600 text-lg">No workers available.</p>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => navigate('/add-worker')}
              >
                Add New Worker
              </button>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Workers;
