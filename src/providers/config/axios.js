import axios from 'axios';

const URL = 'http://localhost:6014';

const axiosProvider = axios.create({
  baseURL: URL
});

axiosProvider.interceptors.response.use(
  (response) => {
    return new Promise(async (resolve, reject) => {
        resolve(response);
    });
  },
  (err) => {
    return new Promise(async (resolve, reject) => {
      reject(err)
    });
  }
);

export default axiosProvider;
