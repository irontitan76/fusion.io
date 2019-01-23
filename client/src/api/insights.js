import axios from 'axios';
import queryString from 'query-string';

const BASE_PATH = '/api/insights';

export const deleteInsight = async (_id) => {
  try {
    const response = await axios.delete(`${BASE_PATH}/${_id}`);
    return response.data;
  } catch (err) {
    const message = `Could not delete Insight ${_id}`;
    return { err, message };
  }
};

export const getInsights = async (params, userId) => {
  try {
    params = `?${queryString.stringify(params)}` || '';
    if (userId) {
      params = `?userId=${userId}&${params}`;
    }
    const response = await axios.get(`${BASE_PATH}${params}`);
    return response.data;
  } catch (err) {
    const message = 'Could not fetch articles';
    return { err, message };
  }
};

export const getInsight = async (slug) => {
  try {
    const response = await axios.get(`${BASE_PATH}/slug/${slug}`);
    return response.data;
  } catch (err) {
    const message = 'Could not fetch articles';
    return { err, message };
  }
};

export const postInsight = async (insight, user) => {
  try {
    const response = await axios.post(BASE_PATH, {
      author: {
        _id: user._id,
        avatar: user.avatar,
        name: `${user.firstName} ${user.lastName}`,
        title: user.title,
      },
      brief: insight.content.substring(0, 65),
      content: insight.content,
      media: {
        alt: 'image',
        src: '/images/earth-resized.jpg',
        type: 'img',
      },
      subtitle: insight.subtitle,
      title: insight.title,
    });
    return response.data;
  } catch (err) {
    const message = 'Could not add insight';
    return { err, message };
  }
};

export const putInsight = async (insight) => {
  try {
    const response = await axios.put(`${BASE_PATH}/${insight._id}`, insight);
    return response.data;
  } catch (err) {
    const message = 'Could not update insight';
    return { err, message };
  }
};