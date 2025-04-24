 import React, { createContext, useState, useEffect } from 'react';

const WorkerContext = createContext();

export const WorkerProvider = ({ children }) => {
  const [workers, setWorkers] = useState(() => {
    try {
      const savedWorkers = localStorage.getItem('workers');
      return savedWorkers ? JSON.parse(savedWorkers) : [];
    } catch (error) {
      console.error('Error loading workers from localStorage:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('workers', JSON.stringify(workers));
    } catch (error) {
      console.error('Error saving workers to localStorage:', error);
    }
  }, [workers]);

  const addWorker = (newWorker) => {
    console.log('Adding worker:', newWorker); // Debugging log

    const workerToAdd = { ...newWorker };
    
    if (workerToAdd.profilePicture instanceof File) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          workerToAdd.profilePicture = reader.result;
          const updatedWorkers = [...workers, workerToAdd];
          console.log('Updated workers:', updatedWorkers); // Debugging log
          setWorkers(updatedWorkers);
          resolve();
        };
        reader.readAsDataURL(workerToAdd.profilePicture);
      });
    } else {
      const updatedWorkers = [...workers, workerToAdd];
      console.log('Updated workers:', updatedWorkers); // Debugging log
      setWorkers(updatedWorkers);
      return Promise.resolve();
    }
  };

  const removeWorker = (id) => {
    const updatedWorkers = workers.filter(worker => worker.id !== id);
    setWorkers(updatedWorkers);
  };

  const editWorker = (id, updatedWorker) => {
    const updatedWorkers = workers.map(worker => 
      worker.id === id ? { ...worker, ...updatedWorker } : worker
    );
    setWorkers(updatedWorkers);
  };

  const getWorkerById = (id) => {
    return workers.find(worker => worker.id === id);
  };

  return (
    <WorkerContext.Provider value={{ 
      workers, 
      addWorker,
      removeWorker,
      editWorker,
      getWorkerById
    }}>
      {children}
    </WorkerContext.Provider>
  );
};

export default WorkerContext;
