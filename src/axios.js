import axios from "axios";
const baseUrl = "http://mmoslemifar.pythonanywhere.com/";

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
