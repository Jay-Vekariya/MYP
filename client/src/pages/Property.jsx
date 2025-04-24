import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PropertyCard from '../components/PropertyCard';
import PropertiesContext from '../context/PropertiesContext';


const Property = () => {
  const { properties } = useContext(PropertiesContext);
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="p-6 mt-16">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">PROPERTY</h1>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            onClick={() => navigate('/addproperty')}
          >
            Add Property
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              id={property.id}
              image={property.image || "https://placehold.co/300x200"}
              title={property.name}
              description={property.description}
              country={property.country}
              state={property.state}
              city={property.city}
              zipCode={property.zipCode}
              address={property.address}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Property;
