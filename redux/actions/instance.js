import axios from "axios";

const instance = axios.create({
  baseURL: "https://43353046688a.ngrok.io/api/v1/",
});

export default instance;
