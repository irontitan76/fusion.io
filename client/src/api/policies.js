import axios from 'axios';
import queryString from 'query-string';

const BASE_PATH = '/api/policies';

export const getPolicies = async (query) => {
  try {
    query = `?${queryString.stringify(query)}` || '';

    const response = await axios.get(`${BASE_PATH}${query}`);
    return response.data;
  } catch (err) {
    const message = 'Could not fetch policies';
    return { err, message };
  }
};

export const getPolicy = async (_id) => {
  try {
    const response = await axios.get(`${BASE_PATH}/${_id}`);
    return response.data;
  } catch (err) {
    const message = `Could not fetch policy ${_id}`;
    return { err, message };
  }
};

export const putPolicy = async (update) => {
  try {
    const response = await axios.put(`${BASE_PATH}/${update._id}`, {
      content: update.content,
      title: update.title,
    });
    return response.data;
  } catch (err) {
    const message = 'Could not update policy';
    return { err, message };
  }
};