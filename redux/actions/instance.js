import axios from "axios";

const instance = axios.create({
  baseURL: "https://39f0b6869d64.ngrok.io/api/v1/",
});

export default instance;
