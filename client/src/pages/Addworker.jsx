import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import WorkerContext from '../context/WorkerContext';
import PropertiesContext from '../context/PropertiesContext';

const AddWorker = ({ workerToEdit }) => {
  const { addWorker, editWorker } = useContext(WorkerContext);
  const { properties } = useContext(PropertiesContext);
  const navigate = useNavigate();
  const isEditMode = !!workerToEdit;

  const [workerData, setWorkerData] = useState(workerToEdit || {
    fullName: '',
    position: '',
    email: '',
    phone: '',
    profilePicture: null,
    dob: '',
    startDate: '',
    salary: '',
    assignedProperty: '',
    status: 'active'
  });

  const [showDetails, setShowDetails] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkerData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setWorkerData(prev => ({ ...prev, profilePicture: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    try {
      if (isEditMode) {
        await editWorker(workerData.id, workerData);
        navigate('/workers');
      } else {
        await addWorker({
          ...workerData,
          id: Date.now().toString()
        });
        navigate('/workers');
      }
    } catch (error) {
      console.error('Error saving worker:', error);
      alert('Failed to save worker. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <PageLayout>
      <div className="p-6 mt-16">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{isEditMode ? 'EDIT WORKER' : 'ADD WORKER'}</h1>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            onClick={handleSubmit}
            disabled={isSaving}
          >
            {isSaving ? 'Saving...' : 'Save Worker'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input 
                className="w-full p-3 border rounded" 
                placeholder="Enter Full Name" 
                type="text"
                name="fullName"
                value={workerData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Position</label>
              <input 
                className="w-full p-3 border rounded" 
                placeholder="Enter Position" 
                type="text"
                name="position"
                value={workerData.position}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input 
                className="w-full p-3 border rounded" 
                placeholder="Enter Email Address" 
                type="email"
                name="email"
                value={workerData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input 
                className="w-full p-3 border rounded" 
                placeholder="Enter Phone Number" 
                type="tel"
                name="phone"
                value={workerData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Profile Picture</label>
              <div className="border-2 border-dashed border-blue-400 p-5 text-center rounded">
                <i className="fas fa-upload text-blue-400 text-2xl mb-3"></i>
                <p className="text-gray-400 mb-3">Drop your files here</p>
                <input 
                  type="file"
                  id="profilePicture"
                  className="hidden"
                  onChange={handleFileChange}
                  accept="image/*"
                />
                <label 
                  htmlFor="profilePicture"
                  className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
                >
                  Choose File
                </label>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Date of Birth</label>
              <input 
                className="w-full p-3 border rounded" 
                type="date"
                name="dob"
                value={workerData.dob}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Start Date</label>
              <input 
                className="w-full p-3 border rounded" 
                type="date"
                name="startDate"
                value={workerData.startDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Salary</label>
              <input 
                className="w-full p-3 border rounded" 
                placeholder="Enter Salary" 
                type="number"
                name="salary"
                value={workerData.salary}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Assigned Property</label>
              <select 
                className="w-full p-3 border rounded"
                name="assignedProperty"
                value={workerData.assignedProperty}
                onChange={handleInputChange}
                required
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
              <label className="block text-gray-700 mb-2">Status</label>
              <select 
                className="w-full p-3 border rounded"
                name="status"
                value={workerData.status}
                onChange={handleInputChange}
                required
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {showDetails && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Worker Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                {workerData.profilePicture && (
                  <img 
                    src={workerData.profilePicture instanceof File ? URL.createObjectURL(workerData.profilePicture) : workerData.profilePicture}
                    alt="Profile" 
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                )}
                <p><span className="font-semibold">Full Name:</span> {workerData.fullName}</p>
                <p><span className="font-semibold">Position:</span> {workerData.position}</p>
                <p><span className="font-semibold">Email:</span> {workerData.email}</p>
                <p><span className="font-semibold">Phone:</span> {workerData.phone}</p>
              </div>
              <div>
                <p><span className="font-semibold">Date of Birth:</span> {workerData.dob}</p>
                <p><span className="font-semibold">Start Date:</span> {workerData.startDate}</p>
                <p><span className="font-semibold">Salary:</span> {workerData.salary}</p>
                <p><span className="font-semibold">Status:</span> {workerData.status}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default AddWorker;
