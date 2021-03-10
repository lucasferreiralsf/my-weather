export interface AppCity {
  src: string;
  label: string;
  lat: number;
  lon: number;
  key?: string;
}

export interface AppCities {
  [name: string]: AppCity;
}
