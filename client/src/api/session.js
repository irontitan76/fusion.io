import axios from 'axios';
import bcrypt from 'bcryptjs';

const SALT_WORK_FACTOR = 10;

export const login = async (password, username) => {
  try {
    const hashedPassword = await bcrypt.hash(password, SALT_WORK_FACTOR);
    const response = await axios.post('/api/users/login', {
      username,
      password: hashedPassword,
    });

    return response;
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
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    const hash = await bcrypt.hash(user.password.value, salt);

    const response = await axios.post('/api/users/signup', {
      firstName: user.firstName.value,
      lastName: user.lastName.value,
      username: user.username.value,
      password: hash,
    });

    return response;
  } catch (err) {
    return err.response;
  }
};
