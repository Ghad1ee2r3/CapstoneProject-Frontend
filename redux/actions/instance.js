import axios from "axios";

const instance = axios.create({
  baseURL: "https://6f6c1c34e429.ngrok.io/api/v1/",
});

export default instance;
