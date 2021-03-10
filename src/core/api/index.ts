import axios from 'axios';
import environments from './environments';

const openWeatherApi = {
  weather: axios.create({
    baseURL: environments.openWeatherBaseUrl,
    headers: { 'Content-Type': 'application/json' },
  }),
  geo: axios.create({
    baseURL: environments.openWeatherGeolocationBaseUrl,
    headers: { 'Content-Type': 'application/json' },
  }),
};

openWeatherApi.weather.interceptors.request.use(async (config) => {
  const urlWithAppId = `${config.url}&appid=${environments.openWeatherAppId}&units=metric&lang=pt_br`;
  config.url = urlWithAppId;
  return config;
});

openWeatherApi.geo.interceptors.request.use(async (config) => {
  const urlWithAppId = `${config.url}&appid=${environments.openWeatherAppId}&units=metric&lang=pt_br`;
  config.url = urlWithAppId;
  return config;
});

const placesApi = axios.create({
  baseURL: environments.googlePlacesApiBaseUrl,
  headers: { 'Content-Type': 'application/json' },
});

placesApi.interceptors.request.use(async (config) => {
  const urlWithAppId = `${config.url}&key=${environments.googlePlacesApiKey}`;
  config.url = urlWithAppId;
  return config;
});

export { openWeatherApi, placesApi };
