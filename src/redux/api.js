import axios from 'axios';
const BASE_URL = 'https://petlove.b.goit.study/api';
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
