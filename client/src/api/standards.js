import axios from 'axios';

export const deleteStandard = async (_id) => {
  try {
    const response = await axios.delete(`/api/standards/${_id}`);
    return response.data;
  } catch (err) {
    const message = `Could not delete standard ${_id}`;
    return { err, message };
  }
};

export const getStandard = async (id) => {
  try {
    const response = await axios.get(`/api/standards/${id}`);
    return response.data;
  } catch (err) {
    const message = 'Could not fetch standards';
    return { err, message };
  }
};

export const getStandards = async () => {
  try {
    const response = await axios.get(`/api/standards`);
    return response.data;
  } catch (err) {
    const message = 'Could not fetch standards';
    return { err, message };
  }
};

export const postStandard = async (standard) => {
  try {
    const path = '/api/standards';

    const request = {
      content: standard.content,
      parentId: standard.parentId === 'none' ? null : standard.parentId,
      siblingId: standard.siblingId === 'none' ? null : standard.siblingId,
      title: standard.title,
    };

    const response = await axios.post(path, request);
    return response.data;
  } catch (err) {
    const message = 'Could not add standard';
    return { err, message };
  }
};

export const putStandard = async (update) => {
  try {
    const path = `/api/standards/${update._id}`;

    const request = {
      content: update.content,
      parentId: update.parentId,
      siblingId: update.siblingId,
      title: update.title,
    };

    const response = await axios.put(path, request);
    return response.data;
  } catch (err) {
    const message = 'Could not update standard';
    return { err, message };
  }
};