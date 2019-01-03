import axios from 'axios';

const BASE_PATH = '/api/users';

export const login = async (password, username) => {
  try {
    const response = await axios.post(`${BASE_PATH}/login`, {
      password,
      username,
    });

    return response.status !== 200 || !response.data._id
      ? { auth: false, user: {} }
      : { auth: response.status === 200, user: response.data };
  } catch (err) {
    const message = 'There was an issue logging you in';
    return { err: err.response, message };
  }
};

export const logout = async () => {
  try {
    const user = localStorage.getItem('USER_ID');
    return await axios.delete(`${BASE_PATH}/logout`, user);
  } catch (err) {
    const message = 'There was an issue logging you out';
    return { err: err.response, message };
  }
};

export const signup = async (user) => {
  try {
    const response = await axios.post(`${BASE_PATH}/signup`, {
      firstName: user.firstName.value,
      lastName: user.lastName.value,
      username: user.username.value,
      password: user.password.value,
      role: 'user',
    });

    return response;
  } catch (err) {
    return err.response;
  }
};
