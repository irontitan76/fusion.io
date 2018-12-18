import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
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
      required: 'Product brief is required',
      trim: true,
      type: String,
    },
    description: {
      trim: true,
      type: String,
    },
    family: {
      index: true,
      required: 'Product family is required',
      trim: true,
      type: String,
    },
    name: {
      trim: true,
      type: String,
    },
    price: {
      required: 'Product price is required',
      trim: true,
      type: String,
    },
    sku: {
      required: 'Product SKU is required',
      unique: true,
      trim: true,
      type: String,
    },
}, { collection: 'products' });

const Product = mongoose.model('Product', productSchema);

export default Product;