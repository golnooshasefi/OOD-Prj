import axios from "axios";
const baseUrl = "http://127.0.0.1:8000/";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "Bearer " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
