import environments from '@core/api/environments';
import { AppCities, AppCity } from '@core/interfaces/app-cities';

const INITIAL_PLACES: AppCities = {
  paris: {
    src:
      'https://lh5.googleusercontent.com/p/AF1QipO-uW6PGeKA54mHOyC9WbD3CspybhBHC_ZL5dk6=s400-k-no',
    label: 'Paris',
    lat: 48.856614,
    lon: 2.3522219,
  },
  'rio de janeiro': {
    src:
      'https://images.musement.com/cover/0001/43/rio-de-janeiro_header-42385.jpeg?w=1200&h=630&q=95&fit=crop',
    label: 'Rio de Janeiro',
    lat: -22.9068467,
    lon: -43.1728965,
  },
  'new york': {
    src:
      'https://images.musement.com/cover/0002/49/thumb_148242_cover_header.jpeg?w=1200&h=630&q=95&fit=crop',
    label: 'New York',
    lat: -23.5505199,
    lon: -46.63330939999999,
  },
};

const addPlace = (
  label: string,
  photoReference: string,
  lat: number,
  lon: number
) => {
  let placesFromStorage: string | AppCities | null = localStorage.getItem(
    'places'
  );
  const place: AppCity = {
    src: `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoReference}&key=${environments.googlePlacesApiKey}&maxwidth=400&maxheight=400`,
    label,
    lat,
    lon,
  };
  if (placesFromStorage) {
    placesFromStorage = <AppCities>JSON.parse(placesFromStorage as string);
    placesFromStorage = Object.assign(placesFromStorage, {
      [place.label]: place,
    });
  } else {
    placesFromStorage = Object.assign(INITIAL_PLACES, {
      [place.label]: place,
    });
  }

  localStorage.setItem('places', JSON.stringify(placesFromStorage));
  return placesFromStorage;
};

const getPlaces = (): AppCities => {
  const places = localStorage.getItem('places');
  if (places) return JSON.parse(places);
  return INITIAL_PLACES;
};

export { INITIAL_PLACES, addPlace, getPlaces };
