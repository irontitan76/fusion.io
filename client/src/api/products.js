import axios from 'axios';

const BASE_PATH = '/api/products';

export const getProducts = async () => {
  try {
    const response = await axios.get(BASE_PATH);
    return response.data;
  } catch (err) {
    const message = 'Could not fetch products';
    return { err, message };
  }
};