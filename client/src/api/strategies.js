import axios from 'axios';

export const deleteStrategy = async (_id) => {
  try {
    const response = await axios.delete(`/api/strategies/${_id}`);
    return response.data;
  } catch (err) {
    const message = `Could not delete strategy ${_id}`;
    return { err, message };
  }
};

export const getStrategy = async (id) => {
  try {
    const response = await axios.get(`/api/strategies/${id}`);
    return response.data;
  } catch (err) {
    const message = 'Could not fetch strategies';
    return { err, message };
  }
};

export const getStrategies = async () => {
  try {
    const response = await axios.get(`/api/strategies`);
    return response.data;
  } catch (err) {
    const message = 'Could not fetch strategies';
    return { err, message };
  }
};

export const postStrategy = async (strategy) => {
  try {
    const path = '/api/strategies';

    const request = {
      content: strategy.content,
      parentId: strategy.parentId === 'none' ? null : strategy.parentId,
      siblingId: strategy.siblingId === 'none' ? null : strategy.siblingId,
      title: strategy.title,
    };

    const response = await axios.post(path, request);
    return response.data;
  } catch (err) {
    const message = 'Could not add strategy';
    return { err, message };
  }
};

export const putStrategy = async (update) => {
  try {
    const path = `/api/strategies/${update._id}`;

    const request = {
      content: update.content,
      parentId: update.parentId,
      siblingId: update.siblingId,
      title: update.title,
    };

    const response = await axios.put(path, request);
    return response.data;
  } catch (err) {
    const message = 'Could not update strategy';
    return { err, message };
  }
};