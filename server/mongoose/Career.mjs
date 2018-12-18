import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  street: { type: String },
  city: { type: String },
  state: { type: String },
  countryCode: { type: String },
  postalCode: { type: String },
});

const careerSchema = new mongoose.Schema({
    _createdAt: {
      required: true,
      type: Date,
    },
    _modifiedAt: {
      default: Date.now,
      type: Date,
    },
    _publishedAt: {
      type: Date
    },
    brief: {
      required: 'Career brief is required',
      trim: true,
      type: String,
    },
    description: {
      trim: true,
      type: String,
    },
    location: {
      trim: true,
      type: locationSchema,
    },
    org: {
      index: true,
      required: 'Product organization is required',
      trim: true,
      type: String,
    },
    role: {
      trim: true,
      type: String,
    },
    team: {
      trim: true,
      type: String,
    },
}, { collection: 'careers' });

const Career = mongoose.model('Career', careerSchema);

export default Career;