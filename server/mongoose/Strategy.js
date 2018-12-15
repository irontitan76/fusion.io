import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  body: { type: String },
  type: { type: String, enum: ['md'] }
});

const strategySchema = new mongoose.Schema({
  content: contentSchema,
  _createdAt: {
    required: true,
    type: Date,
  },
  _modifiedAt: {
    default: Date.now,
    required: true,
    type: Date,
  },
  _publishedAt: {
    type: Date,
  },
  id: {
    required: true,
    type: Number,
  },
  level: {
    required: true,
    type: Number,
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
    required: true,
    trim: true,
    type: String,
  },
}, { collection: 'strategies' });

const Strategy = mongoose.model('Strategy', strategySchema);

export default Strategy;