import useSWR from 'swr';
import { OpenWeatherCurrentByCity } from '../interfaces/open-weather-current-by-city';
import { OpenWeatherOneCall } from '../interfaces/open-weather-one-call';
import {
  getOneCallForecast,
  getCurrentByCity,
} from '../providers/open-weather';

function useOpenWeatherOneCall(
  lat = -18.9113,
  lon = -48.2622,
  initialData?: any
): { loading: boolean; data?: OpenWeatherOneCall; mutate: any } {
  const { data, mutate, error } = useSWR<OpenWeatherOneCall>(
    ['get-one-call-forecast', lat, lon],
    getOneCallForecast,
    { initialData }
  );
  const loading = !data && !error;
  return {
    loading,
    data,
    mutate,
  };
}

function useOpenWeatherCurrentByCity(
  city = 'Uberlandia',
  initialData?: any
): { loading: boolean; data?: OpenWeatherCurrentByCity; mutate: any } {
  const { data, mutate, error } = useSWR<OpenWeatherCurrentByCity>(
    ['get-current-by-city', city],
    getCurrentByCity,
    { initialData }
  );
  const loading = !data && !error;
  return {
    loading,
    data,
    mutate,
  };
}

export { useOpenWeatherOneCall, useOpenWeatherCurrentByCity };
