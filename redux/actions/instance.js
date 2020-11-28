import axios from "axios";

const instance = axios.create({
  baseURL: "http://6155a5301c16.ngrok.io/api/v1/",
});

export default instance;
