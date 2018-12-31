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

export const postCareer = async (career, user) => {
  try {
    const path = '/api/careers';

    const request = {
      brief: career.description.substring(0, 100),
      description: career.description,
      location: {
        city: career.city,
        state: career.state,
      },
      org: career.org,
      role: career.role,
      team: career.team,
    };

    const response = await axios.post(path, request);
    return response.data;
  } catch (err) {
    const message = 'Could not add career';
    return { err, message };
  }
};

export const putCareer = async (career) => {
  try {
    const path = `/api/careers/${career._id}`;
    const response = await axios.put(path, career);
    return response.data;
  } catch (err) {
    const message = 'Could not update career';
    return { err, message };
  }
};