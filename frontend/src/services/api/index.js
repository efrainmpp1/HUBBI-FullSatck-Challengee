import axios from "axios";

const baseURL = "https://localhost:8000";

export const api = axios.create({
  baseURL,
});
