import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.127:8000/api/v1/",
});

export default instance;
