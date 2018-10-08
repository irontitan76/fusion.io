import axios from 'axios';
import bcrypt from 'bcryptjs';

export const login = (password, username) => {
  return true;
};

export const logout = (password, username) => {
  return true;
};

export const signup = async (user) => {
  try {
    const hashedPassword = await bcrypt.hash(user.password.value, 10);
    const response = await axios.post('/api/users/signup', {
      firstName: user.firstName.value,
      lastName: user.lastName.value,
      username: user.username.value,
      password: hashedPassword,
    });
    return response;
  } catch (err) {
    console.log(err.response);
    return err.response;
  }
};
