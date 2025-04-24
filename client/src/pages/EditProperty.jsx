import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropertiesContext from '../context/PropertiesContext';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { properties, editProperty } = useContext(PropertiesContext);
  const [property, setProperty] = useState({
    type: '',
    name: '',
    description: '',
    image: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
    address: ''
  });

  useEffect(() => {
    const existingProperty = properties.find(p => p.id === parseInt(id));
    if (existingProperty) {
      setProperty(existingProperty);
    }
  }, [id, properties]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editProperty(parseInt(id), property);

    alert('Property updated successfully!');
    navigate('/property');
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <div className="p-6 mt-16">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">EDIT PROPERTY</h1>
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              onClick={handleSubmit}
              type="button"
            >
              Save Changes
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Left Column */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-5">
                <label className="block text-gray-700 mb-2">Type</label>
                <input 
                  className="w-full p-3 border rounded" 
                  placeholder="Own Property" 
                  type="text"
                  name="type"
                  value={property.type}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label className="block text-gray-700 mb-2">Name Of Property</label>
                <input 
                  className="w-full p-3 border rounded" 
                  placeholder="Enter Property Name" 
                  type="text"
                  name="name"
                  value={property.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea 
                  className="w-full p-3 border rounded h-32" 
                  placeholder="Write About Property"
                  name="description"
                  value={property.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-5">
                <label className="block text-gray-700 mb-2">Property Image</label>
                <div className="border-2 border-dashed border-blue-400 p-5 text-center rounded">
                  {property.image ? (
                    <img 
                      src={property.image} 
                      alt="Preview" 
                      className="max-h-40 mx-auto mb-3"
                    />
                  ) : (
                    <>
                      <i className="fas fa-upload text-blue-400 text-2xl mb-3"></i>
                      <p className="text-gray-400 mb-3">Drop your files here</p>
                    </>
                  )}
                  <input
                    type="file"
                    id="image-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = () => {
                          setProperty(prev => ({
                            ...prev,
                            image: reader.result
                          }));
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  <label 
                    htmlFor="image-upload"
                    className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
                  >
                    Choose File
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-5">
                <label className="block text-gray-700 mb-2">Country</label>
                <input 
                  className="w-full p-3 border rounded" 
                  placeholder="Enter Property Country" 
                  type="text"
                  name="country"
                  value={property.country}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label className="block text-gray-700 mb-2">State</label>
                <input 
                  className="w-full p-3 border rounded" 
                  placeholder="Enter Property State" 
                  type="text"
                  name="state"
                  value={property.state}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label className="block text-gray-700 mb-2">City</label>
                <input 
                  className="w-full p-3 border rounded" 
                  placeholder="Enter Property City" 
                  type="text"
                  name="city"
                  value={property.city}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label className="block text-gray-700 mb-2">Zip Code</label>
                <input 
                  className="w-full p-3 border rounded" 
                  placeholder="Enter Property Zip Code" 
                  type="text"
                  name="zipCode"
                  value={property.zipCode}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label className="block text-gray-700 mb-2">Address</label>
                <input 
                  className="w-full p-3 border rounded" 
                  placeholder="Enter Full Address" 
                  type="text"
                  name="address"
                  value={property.address}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProperty;
