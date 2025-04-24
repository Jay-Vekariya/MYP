import React, { createContext, useState, useEffect } from 'react';

const PropertiesContext = createContext();

export const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState(() => {
    const savedProperties = localStorage.getItem('properties');
    return savedProperties ? JSON.parse(savedProperties) : [];
  });

  useEffect(() => {
    localStorage.setItem('properties', JSON.stringify(properties));
  }, [properties]);

  const addProperty = (newProperty) => {
    if (newProperty.image instanceof File) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedProperties = [...properties, {
          ...newProperty,
          image: reader.result
        }];
        setProperties(updatedProperties);
      };
      reader.readAsDataURL(newProperty.image);
    } else {
      const updatedProperties = [...properties, newProperty];
      setProperties(updatedProperties);
    }
  };

  const removeProperty = (id) => {
    const updatedProperties = properties.filter(property => property.id !== id);
    setProperties(updatedProperties);
  };

  const editProperty = (id, updatedProperty) => {
    const updatedProperties = properties.map(property => 
      property.id === id ? { ...property, ...updatedProperty } : property
    );
    setProperties(updatedProperties);
  };

  return (
    <PropertiesContext.Provider value={{ 
      properties, 
      addProperty,
      removeProperty,
      editProperty

    }}>
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesContext;
