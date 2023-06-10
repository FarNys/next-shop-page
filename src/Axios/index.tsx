import axios from "axios";

const Axios = axios.create({
  // baseURL: "https://developerf.com/server/api/",
  baseURL: "http://localhost:5000/api/",
  timeout: 3000,
});

// Axios.interceptors.request.use((config) => {
//   config.params = {
//     ...config.params,
//   };
//   return config;
// });

export default Axios;
