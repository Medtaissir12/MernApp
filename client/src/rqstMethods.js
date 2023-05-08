import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";



const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjQ2MGY1YzJlNmM0YmEyZTc5YjI5MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDU0MDk5MSwiZXhwIjoxNjgwODAwMTkxfQ.muGMk0sShrgpPeuJAZdUN6C2cV1ShqoVdrLLyPy0PsY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
