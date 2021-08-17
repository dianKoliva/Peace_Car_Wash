import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: "https://discipline--backend1.herokuapp.com",
  headers: {
    Authorization: localStorage.getItem("token"),
  },
  /* other custom settings */
});

export default axiosInstance;