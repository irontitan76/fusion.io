import axios from 'axios';
import queryString from 'query-string';

export const getPolicies = async (query) => {
  try {
    query = `?${queryString.stringify(query)}` || '';

    const response = await axios.get(`/api/policies${query}`);
    return response.data;
  } catch (err) {
    const message = 'Could not fetch policies';
    return { err, message };
  }
};

export const getPolicy = async (_id) => {
  try {
    const response = await axios.get(`/api/policies/${_id}`);
    return response.data;
  } catch (err) {
    const message = `Could not fetch policy ${_id}`;
    return { err, message };
  }
};

export const putPolicies = async (update) => {
  try {
    const path = `/api/policies/${update._id}`;

    const request = {
      content: update.content,
      title: update.title,
    };

    const response = await axios.put(path, request);
    return response.data;
  } catch (err) {
    const message = 'Could not update policy';
    return { err, message };
  }
};