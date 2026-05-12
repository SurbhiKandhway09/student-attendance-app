import axios from "axios";

const API = axios.create({
  baseURL: "https://student-attendance-app-production.up.railway.app/api"
});

export default API;