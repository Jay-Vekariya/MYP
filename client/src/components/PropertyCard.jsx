import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertiesContext from '../context/PropertiesContext';

const PropertyCard = ({ id, image, title, description, country, state, city, zipCode, address }) => {
  const navigate = useNavigate();
  const { removeProperty } = useContext(PropertiesContext);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <img 
          alt="Property Image" 
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" 
          src={image || '/default-property.jpg'} 
          onError={(e) => {
            e.target.src = '/default-property.jpg';
          }}
        />
      </div>

      <h2 className="mt-4 text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="mt-4 space-y-2 text-sm text-gray-600">
        <div><span className="font-medium">Location:</span> {city}, {state}, {country}</div>
        <div><span className="font-medium">Address:</span> {address}</div>
        <div><span className="font-medium">Zip Code:</span> {zipCode}</div>
      </div>
      <div className="flex justify-end mt-4">
        <button 
          className="text-blue-500 mr-2 hover:text-blue-700"
          onClick={() => navigate(`/edit-property/${id}`)}
        >
          <i className="fas fa-edit"></i>
        </button>
        <button 
          className="text-red-500 hover:text-red-700"
          onClick={() => removeProperty(id)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
