import axios from 'axios';

export const getInsights = async () => {
  try {
    const response = await axios.get('/api/insights');
    return response.data;
  } catch (err) {
    const message = 'Could not fetch articles';
    return { err, message };
  }
};