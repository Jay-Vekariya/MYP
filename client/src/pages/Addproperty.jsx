import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PropertiesContext from '../context/PropertiesContext';


const AddProperty = ({ propertyToEdit }) => {
  const { addProperty, editProperty } = useContext(PropertiesContext);
  const navigate = useNavigate();
  const isEditMode = !!propertyToEdit;

  const [propertyData, setPropertyData] = useState(propertyToEdit || {
    name: '',
    description: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
    address: '',
    image: null
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setPropertyData(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    try {
      if (isEditMode) {
        await editProperty(propertyData.id, propertyData);
        navigate('/properties');
      } else {
        await addProperty({
          ...propertyData,
          id: Date.now().toString()
        });
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error saving property:', error);
      alert('Failed to save property. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <PageLayout>
      <div className="p-6 mt-16">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{isEditMode ? 'EDIT PROPERTY' : 'ADD PROPERTY'}</h1>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            onClick={handleSubmit}
            disabled={isSaving}
          >
            {isSaving ? 'Saving...' : 'Save Property'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Property Name</label>
              <input 
                className="w-full p-3 border rounded" 
                placeholder="Enter Property Name" 
                type="text"
                name="name"
                value={propertyData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea 
                className="w-full p-3 border rounded" 
                placeholder="Enter Description" 
                name="description"
                value={propertyData.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Country</label>
              <input 
                className="w-full p-3 border rounded" 
                placeholder="Enter Country" 
                type="text"
                name="country"
                value={propertyData.country}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">State</label>
              <input 
                className="w-full p-3 border rounded" 
                placeholder="Enter State" 
                type="text"
                name="state"
                value={propertyData.state}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">City</label>
              <input 
                className="w-full p-3 border rounded" 
                placeholder="Enter City" 
                type="text"
                name="city"
                value={propertyData.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Zip Code</label>
              <input 
                className="w-full p-3 border rounded" 
                placeholder="Enter Zip Code" 
                type="text"
                name="zipCode"
                value={propertyData.zipCode}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Address</label>
              <input 
                className="w-full p-3 border rounded" 
                placeholder="Enter Address" 
                type="text"
                name="address"
                value={propertyData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">Property Image</label>
              <div className="border-2 border-dashed border-blue-400 p-5 text-center rounded">
                <i className="fas fa-upload text-blue-400 text-2xl mb-3"></i>
                <p className="text-gray-400 mb-3">Drop your files here</p>
                <input 
                  type="file"
                  id="propertyImage"
                  className="hidden"
                  onChange={handleFileChange}
                  accept="image/*"
                />
                <label 
                  htmlFor="propertyImage"
                  className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
                >
                  Choose File
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AddProperty;
