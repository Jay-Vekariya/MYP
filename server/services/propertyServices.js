import Property from '../models/property.model.js';

export const createPropertyService = async (propertyData) => {
  try {
    const newProperty = new Property(propertyData);
    await newProperty.save();

    return {
      statusCode: 201,
      Success: true,
      message: 'Property created successfully.',
    };
  } catch (error) {
    throw new Error(`Error in createPropertyService: ${error.message}`);
  }
};

export const getAllPropertiesService = async () => {
  try {
    return await Property.find();
  } catch (error) {
    throw new Error(`Error in getAllPropertiesService: ${error.message}`);
  }
};

export const getPropertyByIdService = async (id) => {
  try {
    return await Property.findById(id);
  } catch (error) {
    throw new Error(`Error in getPropertyByIdService: ${error.message}`);
  }
};

export const updatePropertyService = async (id, updatedData) => {
  try {
    return await Property.findByIdAndUpdate(id, updatedData, { new: true });
  } catch (error) {
    throw new Error(`Error in updatePropertyService: ${error.message}`);
  }
};

export const deletePropertyService = async (id) => {
  try {
    await Property.findByIdAndDelete(id);
    return {
      statusCode: 200,
      Success: true,
      message: 'Property deleted successfully.',
    };
  } catch (error) {
    throw new Error(`Error in deletePropertyService: ${error.message}`);
  }
};
