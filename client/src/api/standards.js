import axios from 'axios';

export const getStandards = async userId => {
  try {
    let params = '';
    const response = await axios.get(`/api/standards${params}`);
    return response.data;
  } catch (err) {
    const message = 'Could not fetch standards';
    return { err, message };
  }
};