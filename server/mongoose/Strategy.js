import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  author: { type: String },
  body: { type: String },
  quote: { type: String },
  type: { type: String, enum: ['html', 'ol', 'quote', 'toc', 'p'] }
});

const strategySchema = new mongoose.Schema({
  content: [contentSchema],
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
  title: {
    required: true,
    trim: true,
    type: String,
  },
}, { collection: 'strategy' });

const Strategy = mongoose.model('Strategy', strategySchema);

export default Strategy;