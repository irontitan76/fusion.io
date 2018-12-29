import axios from 'axios';
import queryString from 'query-string';

export const deleteCareer = async (_id) => {
  try {
    const response = await axios.delete(`/api/careers/${_id}`);
    return response.data;
  } catch (err) {
    const message = `Could not delete career ${_id}`;
    return { err, message };
  }
};

export const getCareer = async (_id) => {
  try {
    const response = await axios.get(`/api/careers/${_id}`);
    return response.data;
  } catch (err) {
    const message = `Could not fetch career ${_id}`;
    return { err, message };
  }
};

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