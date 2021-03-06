import useSWR from 'swr';

import {
  OpenWeatherCityByLatLon,
  OpenWeatherCurrentByCity,
  OpenWeatherOneCall,
} from '../interfaces';
import {
  getOneCallForecast,
  getCurrentByCity,
  getCityByLatLon,
} from '../providers/open-weather';

function useOpenWeatherOneCall(
  lat?: number,
  lon?: number,
  initialData?: any
): { loading: boolean; data?: OpenWeatherOneCall; mutate: any } {
  const { data, mutate, error } = useSWR<OpenWeatherOneCall>(
    lat && lon ? ['useOpenWeatherOneCall', lat, lon] : null,
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
  city?: string,
  initialData?: any
): { loading: boolean; data?: OpenWeatherCurrentByCity; mutate: any } {
  const { data, mutate, error } = useSWR<OpenWeatherCurrentByCity>(
    ['useOpenWeatherCurrentByCity', city],
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

function useOpenWeatherCityByLatLon(
  lat?: number,
  lon?: number,
  initialData?: any
): { loading: boolean; data?: OpenWeatherCityByLatLon; mutate: any } {
  const { data, mutate, error } = useSWR<OpenWeatherCityByLatLon>(
    lat && lon ? ['useOpenWeatherCityByLatLon', lat, lon] : null,
    getCityByLatLon,
    { initialData }
  );
  const loading = !data && !error;
  return {
    loading,
    data,
    mutate,
  };
}

export {
  useOpenWeatherOneCall,
  useOpenWeatherCurrentByCity,
  useOpenWeatherCityByLatLon,
};
