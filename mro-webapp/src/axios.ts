import axios from "axios";

const instance = axios.create({
  baseURL: "https://apiapp20210608202026.azurewebsites.net",
});

export default instance;