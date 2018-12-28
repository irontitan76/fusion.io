import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  body: { type: String },
  type: { type: String, enum: ['md'] }
});

const standardSchema = new mongoose.Schema({
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
  content: contentSchema,
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
}, { collection: 'standards' });

const Standard = mongoose.model('Standard', standardSchema);

export default Standard;