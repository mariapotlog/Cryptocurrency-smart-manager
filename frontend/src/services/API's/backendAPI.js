import { create } from "apisauce";

const backendURL = "http://localhost:5000/api";

const backendAPI = create({
  baseURL: `${backendURL}`,
  headers: {
    Accept: "*/*",
  },
});

export default backendAPI;
