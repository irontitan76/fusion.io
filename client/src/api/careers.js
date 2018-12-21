import axios from 'axios';
import queryString from 'query-string';

export const getCareers = async (query) => {
  try {
    query = `?${queryString.stringify(query)}` || '';

    const response = await axios.get(`/api/careers${query}`);
    return response.data;
  } catch (err) {
    const message = 'Could not fetch careers';
    return { err, message };
  }
};