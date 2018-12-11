import axios from 'axios';

export const getStrategies = async userId => {
  try {
    let params = '';
    const response = await axios.get(`/api/strategies${params}`);
    return response.data;
  } catch (err) {
    const message = 'Could not fetch strategies';
    return { err, message };
  }
};