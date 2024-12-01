import axios from 'axios';

const API_URL = 'http://localhost:8500/';

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default axiosInstance;
