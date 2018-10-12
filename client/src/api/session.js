import axios from 'axios';

export const login = async (password, username) => {
  try {
    const response = await axios.post('/api/users/login', {
      password,
      username,
    });

    return response.status !== 200 || !response.data._id
      ? { auth: false, user: {} }
      : { auth: response.status === 200, user: response.data };
  } catch (err) {
    return err.response;
  }
};

export const logout = async () => {
  try {
    const user = localStorage.getItem('USER_ID');
    return await axios.delete('/api/users/logout', user);
  } catch (err) {
    return err.response;
  }
};

export const signup = async (user) => {
  try {
    const response = await axios.post('/api/users/signup', {
      firstName: user.firstName.value,
      lastName: user.lastName.value,
      username: user.username.value,
      password: user.password.value,
    });

    return response;
  } catch (err) {
    return err.response;
  }
};
