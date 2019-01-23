import axios from 'axios';
import queryString from 'query-string';

const BASE_PATH = '/api/policies';

export const deletePolicy = async (_id) => {
  try {
    const response = await axios.delete(`${BASE_PATH}/${_id}`);
    return response.data;
  } catch (err) {
    const message = `Could not delete Policy ${_id}`;
    return { err, message };
  }
};

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

export const postPolicy = async (policy) => {
  try {
    const response = await axios.post(BASE_PATH, {
      brief: policy.content.body.substring(0, 65),
      content: policy.content,
      level: 0,
      location: policy.location,
      order: 0,
      parentId: null,
      siblingId: null,
      title: policy.title,
    });

    return response.data;
  } catch (err) {
    const message = 'Could not add policy';
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