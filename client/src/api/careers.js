import axios from 'axios';
import queryString from 'query-string';

const BASE_PATH = '/api/careers';

export const deleteCareer = async (_id) => {
  try {
    const response = await axios.delete(`${BASE_PATH}/${_id}`);
    return response.data;
  } catch (err) {
    const message = `Could not delete career ${_id}`;
    return { err, message };
  }
};

export const getCareer = async (_id) => {
  try {
    const response = await axios.get(`${BASE_PATH}/${_id}`);
    return response.data;
  } catch (err) {
    const message = `Could not fetch career ${_id}`;
    return { err, message };
  }
};

export const getCareers = async (query) => {
  try {
    query = `?${queryString.stringify(query)}` || '';

    const response = await axios.get(`${BASE_PATH}/${query}`);
    return response.data;
  } catch (err) {
    const message = 'Could not fetch careers';
    return { err, message };
  }
};

export const postCareer = async (career, user) => {
  try {
    const response = await axios.post(BASE_PATH, {
      brief: career.description.substring(0, 100),
      description: career.description,
      location: career.location,
      org: career.org,
      role: career.role,
      team: career.team,
    });
    return response.data;
  } catch (err) {
    const message = 'Could not add career';
    return { err, message };
  }
};

export const putCareer = async (career) => {
  try {
    const response = await axios.put(`${BASE_PATH}/${career._id}`, career);
    return response.data;
  } catch (err) {
    const message = 'Could not update career';
    return { err, message };
  }
};