import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  body: { type: String },
  type: { type: String, enum: ['md'] }
});

const policySchema = new mongoose.Schema({
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
      required: 'Policy brief is required',
      trim: true,
      type: String,
    },
    content: contentSchema,
    level: {
      required: true,
      type: Number,
    },
    location: {
      required: true,
      type: String,
    },
    order: {
      required: true,
      type: Number,
    },
    parentId: {
      type: Number,
    },
    siblingId: {
      type: Number,
    },
    title: {
      trim: true,
      type: String,
    },
}, { collection: 'policies' });

const Policy = mongoose.model('Policy', policySchema);

export default Policy;