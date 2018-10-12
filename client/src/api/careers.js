import axios from 'axios';

export const getCareers = async () => {
  try {
    const response = await axios.get('/api/careers');
    return response.data;
  } catch (err) {
    const message = 'Could not fetch careers';
    return { err, message };
  }
};