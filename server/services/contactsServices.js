import Contact from "../models/contacts.model.js";

export const createContactService = async (data) => {
  const { name, email, phone, address } = data;

  if (!name) throw new Error("Name is required");

  const newContact = new Contact({ name, email, phone, address });
  await newContact.save();

  return {
    statusCode: 201,
    Success: true,
    message: "Contact created successfully",
    contact: newContact,
  };
};

export const getAllContactsService = async () => {
  const contacts = await Contact.find();
  return { statusCode: 200, Success: true, contacts };
};

export const getContactByIdService = async (id) => {
  const contact = await Contact.findById(id);
  if (!contact) throw new Error("Contact not found");
  return { statusCode: 200, Success: true, contact };
};

export const updateContactService = async (id, updateData) => {
  const updatedContact = await Contact.findByIdAndUpdate(id, updateData, {
    new: true,
  });
  if (!updatedContact) throw new Error("Contact not found for update");
  return {
    statusCode: 200,
    Success: true,
    message: "Contact updated",
    contact: updatedContact,
  };
};

export const deleteContactService = async (id) => {
  const deletedContact = await Contact.findByIdAndDelete(id);
  if (!deletedContact) throw new Error("Contact not found for deletion");
  return { statusCode: 200, Success: true, message: "Contact deleted" };
};
