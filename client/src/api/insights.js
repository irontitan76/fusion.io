import axios from 'axios';

export const getInsights = async (userId) => {
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

export const getInsight = async (slug) => {
  try {
    const response = await axios.get(`/api/insights/${slug}`);
    return response.data;
  } catch (err) {
    const message = 'Could not fetch articles';
    return { err, message };
  }
};

export const postInsights = async (insight, user) => {
  try {
    const path = '/api/insights';

    const request = {
      author: {
        _id: user._id,
        avatar: '/images/desk.jpg',
        name: `${user.firstName} ${user.lastName}`,
        title: 'Sr. Software Engineer',
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
    };

    const response = await axios.post(path, request);
    return response.data;
  } catch (err) {
    const message = 'Could not add insight';
    return { err, message };
  }
};

export const putInsights = async (insight) => {
  try {
    const path = `/api/insights/${insight._id}`;
    const response = await axios.put(path, insight);
    return response.data;
  } catch (err) {
    const message = 'Could not update insight';
    return { err, message };
  }
};