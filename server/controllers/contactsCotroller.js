import {
    createContactService,
    getAllContactsService,
    getContactByIdService,
    updateContactService,
    deleteContactService,
  } from '../services/contactsServices.js';
  
  export const createContact = async (req, res) => {
    try {
      const result = await createContactService(req.body);
      res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({ Success: false, message: error.message });
    }
  };
  
  export const getAllContacts = async (req, res) => {
    try {
      const result = await getAllContactsService();
      res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({ Success: false, message: error.message });
    }
  };
  
  export const getContactById = async (req, res) => {
    try {
      const result = await getContactByIdService(req.params.id);
      res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(404).json({ Success: false, message: error.message });
    }
  };
  
  export const updateContact = async (req, res) => {
    try {
      const result = await updateContactService(req.params.id, req.body);
      res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(404).json({ Success: false, message: error.message });
    }
  };
  
  export const deleteContact = async (req, res) => {
    try {
      const result = await deleteContactService(req.params.id);
      res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(404).json({ Success: false, message: error.message });
    }
  };
  