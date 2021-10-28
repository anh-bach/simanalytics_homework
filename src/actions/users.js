import axios from 'axios';

export const getUsers = async () => {
  return await axios.get('https://jsonplaceholder.typicode.com/users');
};
