import axios from 'axios';

const BASE_PATH = '/api/strategies';

export const deleteStrategy = async (_id) => {
  try {
    const response = await axios.delete(`${BASE_PATH}/${_id}`);
    return response.data;
  } catch (err) {
    const message = `Could not delete strategy ${_id}`;
    return { err, message };
  }
};

export const getStrategy = async (id) => {
  try {
    const response = await axios.get(`${BASE_PATH}/${id}`);
    return response.data;
  } catch (err) {
    const message = 'Could not fetch strategies';
    return { err, message };
  }
};

export const getStrategies = async () => {
  try {
    const response = await axios.get(BASE_PATH);
    return response.data;
  } catch (err) {
    const message = 'Could not fetch strategies';
    return { err, message };
  }
};

export const postStrategy = async (strategy) => {
  try {
    const response = await axios.post(BASE_PATH, {
      content: strategy.content,
      parentId: strategy.parentId === 'none' ? null : strategy.parentId,
      siblingId: strategy.siblingId === 'none' ? null : strategy.siblingId,
      title: strategy.title,
    });
    return response.data;
  } catch (err) {
    const message = 'Could not add strategy';
    return { err, message };
  }
};

export const putStrategy = async (update) => {
  try {
    const response = await axios.put(`${BASE_PATH}/${update._id}`, {
      content: update.content,
      parentId: update.parentId,
      siblingId: update.siblingId,
      title: update.title,
    });
    return response.data;
  } catch (err) {
    const message = 'Could not update strategy';
    return { err, message };
  }
};