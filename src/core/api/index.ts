import axios from 'axios';
import environments from './environments';

const openWeatherApi = axios.create({
  baseURL: environments.openWeatherBaseUrl,
  headers: { 'Content-Type': 'application/json' },
});

openWeatherApi.interceptors.request.use(async (config) => {
  const urlWithAppId = `${config.url}&appid=${environments.openWeatherAppId}&units=metric&lang=pt_br`;
  config.url = urlWithAppId;
  return config;
});

export default openWeatherApi;
