import axios from 'axios';

export const getInsights = async userId => {
  try {
    let params = '';
    if ( userId ) {
      params = `?userId=${userId}`;
    }
    const response = await axios.get(`/api/insights${params}`);
    return response.data;
  } catch (err) {
    const message = 'Could not fetch articles';
    return { err, message };
  }
};

export const getInsight = async slug => {
  try {
    const response = await axios.get(`/api/insights/${slug}`);
    return response.data;
  } catch (err) {
    const message = 'Could not fetch articles';
    return { err, message };
  }
};