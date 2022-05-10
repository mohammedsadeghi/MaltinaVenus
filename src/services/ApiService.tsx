import axios from 'axios';
axios.defaults.baseURL = 'https://api.malltina.net';

const api = {
  get: axios.get,
};
export default api;
