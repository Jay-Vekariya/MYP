import React, { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import WorkerContext from '../context/WorkerContext';
import AddWorker from './Addworker';

const EditWorker = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getWorkerById } = useContext(WorkerContext);
  const workerToEdit = getWorkerById(id);

  useEffect(() => {
    if (!workerToEdit) {
      navigate('/workers');
    }
  }, [workerToEdit, navigate]);

  if (!workerToEdit) {
    return null;
  }

  return <AddWorker workerToEdit={workerToEdit} />;
};

export default EditWorker;
