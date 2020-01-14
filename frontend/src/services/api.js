import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL_USER,
  headers: { 
    "Content-Type": "application/x-www-form-urlencoded",
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
}
  });

api.interceptors.request.use(async config => {
   
  const token = getToken();
  console.log("Api == > Authorization: ",token)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; 
    
  }

  return config;
});

export default api;