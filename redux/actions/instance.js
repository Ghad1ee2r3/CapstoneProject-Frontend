import axios from "axios";

const instance = axios.create({
  baseURL: "https://fc54093c21dd.ngrok.io/api/v1/",

});

export default instance;
