import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  propertyName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  zipCode: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  propertyImage: {
    type: String, // Store Cloudinary URL or any image URL
    default: '',
  }
}, {
  timestamps: true,
});

const Property = mongoose.model('Property', propertySchema);

export default Property;
