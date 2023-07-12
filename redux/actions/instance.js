import axios from "axios";

const instance = axios.create({
  baseURL: "https://f4f8c33cff62.ngrok.io/api/v1/",
  //  baseURL: "https://6f6c1c34e429.ngrok.io/api/v1/",

  // https://f4f8c33cff62.ngrok.io
});

export default instance;
