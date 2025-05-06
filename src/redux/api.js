import axios from 'axios';
const BASE_URL = 'https://petlove.b.goit.study/api';
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
export const setAuthHeader = token => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// export const setAuthHeader = token => {
//   if (!token) {
//     console.error('Token is missing');
//     return;
//   }
//   axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
// };
export const clearAuthHeader = () => {
  delete axiosInstance.defaults.headers.common.Authorization;
};
export default axiosInstance;
