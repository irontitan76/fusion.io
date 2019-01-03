import axios from 'axios';

const BASE_PATH = '/api/standards';

export const deleteStandard = async (_id) => {
  try {
    const response = await axios.delete(`${BASE_PATH}/${_id}`);
    return response.data;
  } catch (err) {
    const message = `Could not delete standard ${_id}`;
    return { err, message };
  }
};

export const getStandard = async (id) => {
  try {
    const response = await axios.get(`${BASE_PATH}/${id}`);
    return response.data;
  } catch (err) {
    const message = 'Could not fetch standards';
    return { err, message };
  }
};

export const getStandards = async () => {
  try {
    const response = await axios.get(BASE_PATH);
    return response.data;
  } catch (err) {
    const message = 'Could not fetch standards';
    return { err, message };
  }
};

export const postStandard = async (standard) => {
  try {
    const response = await axios.post(BASE_PATH, {
      content: standard.content,
      parentId: standard.parentId === 'none' ? null : standard.parentId,
      siblingId: standard.siblingId === 'none' ? null : standard.siblingId,
      title: standard.title,
    });
    return response.data;
  } catch (err) {
    const message = 'Could not add standard';
    return { err, message };
  }
};

export const putStandard = async (update) => {
  try {
    const response = await axios.put(`${BASE_PATH}/${update._id}`, {
      content: update.content,
      parentId: update.parentId,
      siblingId: update.siblingId,
      title: update.title,
    });
    return response.data;
  } catch (err) {
    const message = 'Could not update standard';
    return { err, message };
  }
};