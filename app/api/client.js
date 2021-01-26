import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.249.120:9000/api",
});

export default apiClient;
