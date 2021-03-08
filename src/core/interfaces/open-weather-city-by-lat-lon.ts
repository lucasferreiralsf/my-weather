/* eslint-disable */
export interface OpenWeatherCityByLatLon {
  name: string;
  local_names: LocalNames;
  lat: number;
  lon: number;
  country: string;
}

export interface LocalNames {
  ascii: string;
  feature_name: string;
  lt: string;
  ru: string;
}
