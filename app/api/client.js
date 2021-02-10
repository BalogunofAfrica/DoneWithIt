import { create } from "apisauce";
import AuthStorage from "../auth/storage";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://192.168.245.120:9000/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await AuthStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
