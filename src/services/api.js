import axios from "axios";

const API = axios.create({
  baseURL: "https://fakestoreapi.com/products",
  timeout: 15000,
});

export default API;
