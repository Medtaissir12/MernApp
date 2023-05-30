import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const userStorage = JSON.parse(localStorage.getItem("persist:root")).user;
const currentUser = userStorage ? JSON.parse(userStorage).currentUser : null;
const TOKEN = currentUser ? currentUser.accessToken : null;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: TOKEN ? { token: `Bearer ${TOKEN}` } : {},
});
