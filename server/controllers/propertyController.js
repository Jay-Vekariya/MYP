import {
    createPropertyService,
    getAllPropertiesService,
    getPropertyByIdService,
    updatePropertyService,
    deletePropertyService,
} from '../services/propertyServices.js'; // Corrected file name
  
  export const createProperty = async (req, res) => {
    try {
      const result = await createPropertyService(req.body);
      res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({ Success: false, message: error.message });
    }
  };
  
  export const getProperties = async (req, res) => {
    try {
      const properties = await getAllPropertiesService();
      res.status(200).json(properties);
    } catch (error) {
      res.status(500).json({ Success: false, message: error.message });
    }
  };
  
  export const getPropertyById = async (req, res) => {
    try {
      const property = await getPropertyByIdService(req.params.id);
      if (!property) {
        return res.status(404).json({ Success: false, message: 'Property not found' });
      }
      res.status(200).json(property);
    } catch (error) {
      res.status(500).json({ Success: false, message: error.message });
    }
  };
  
  export const updateProperty = async (req, res) => {
    try {
      const updatedProperty = await updatePropertyService(req.params.id, req.body);
      res.status(200).json(updatedProperty);
    } catch (error) {
      res.status(500).json({ Success: false, message: error.message });
    }
  };
  
  export const deleteProperty = async (req, res) => {
    try {
      const result = await deletePropertyService(req.params.id);
      res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({ Success: false, message: error.message });
    }
  };
  