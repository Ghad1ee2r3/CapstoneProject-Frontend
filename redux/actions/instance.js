import axios from "axios";

const instance = axios.create({
  // baseURL: "http://192.168.1.198:8000/api/v1/",
  baseURL: "https://ce85e46b4c13.ngrok.io/api/v1/",
});

export default instance;
