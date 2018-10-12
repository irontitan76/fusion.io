import axios from 'axios';

export const getProducts = async () => {
  try {
    const response = await axios.get('/api/products');
    return response.data;
  } catch (err) {
    const message = 'Could not fetch products';
    return { err, message };
  }
};