import openWeatherApi from '../api';
import { OpenWeatherCurrentByCity } from '../interfaces/open-weather-current-by-city';
import { OpenWeatherOneCall } from '../interfaces/open-weather-one-call';

const getOneCallForecast = async (
  _ = '',
  lat = -18.9113,
  lon = -48.2622
): Promise<OpenWeatherOneCall> => {
  const res = await openWeatherApi.get<OpenWeatherOneCall>(
    `/onecall?lat=${lat}&lon=${lon}`
  );
  return res.data;
};

const getCurrentByCity = async (
  _ = '',
  city: string
): Promise<OpenWeatherCurrentByCity> => {
  const res = await openWeatherApi.get<OpenWeatherCurrentByCity>(
    `/weather?q=${city}`
  );
  return res.data;
};

export { getOneCallForecast, getCurrentByCity };
