import { placesApi } from '../api';
import { GooglePlace } from '../interfaces';

const getPlaceByName = async (
  _ = '',
  cityName: string
): Promise<GooglePlace> => {
  const res = await placesApi.get<GooglePlace>(
    `/json?inputtype=textquery&fields=name,photos,geometry&input=${cityName}`
  );
  return res.data;
};

export default getPlaceByName;
