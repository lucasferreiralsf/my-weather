import openWeatherApi from '../api';
import {
  OpenWeatherCityByLatLon,
  OpenWeatherCurrentByCity,
  OpenWeatherOneCall,
} from '../interfaces';

const getOneCallForecast = async (
  _ = '',
  lat = -18.9113,
  lon = -48.2622
): Promise<OpenWeatherOneCall> => {
  const res = await openWeatherApi.weather.get<OpenWeatherOneCall>(
    `/onecall?lat=${lat}&lon=${lon}`
  );
  return res.data;
};

const getCurrentByCity = async (
  _ = '',
  city = 'Uberlândia'
): Promise<OpenWeatherCurrentByCity> => {
  const res = await openWeatherApi.weather.get<OpenWeatherCurrentByCity>(
    `/weather?q=${city}`
  );
  return res.data;
};

const getCityByLatLon = async (
  _ = '',
  lat = -18.9113,
  lon = -48.2622
): Promise<OpenWeatherCityByLatLon> => {
  const res = await openWeatherApi.geo.get<OpenWeatherCityByLatLon[]>(
    `/reverse?lat=${lat}&lon=${lon}`
  );
  return res.data[0];
};

export { getOneCallForecast, getCurrentByCity, getCityByLatLon };
