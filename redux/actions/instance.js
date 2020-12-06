import axios from "axios";

const instance = axios.create({
  baseURL: "https://ad8f08f5365c.ngrok.io/api/v1/",
});

export default instance;
