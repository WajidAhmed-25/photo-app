import axios from "axios";


const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL)

export const signup = (email: string, password: string) =>
  axios.post(`/auth/signup`, { email, password });

export const login = (email: string, password: string) =>
  axios.post(`${API_URL}/auth/login`, { email, password });
