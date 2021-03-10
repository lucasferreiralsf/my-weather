import useSWR from 'swr';

import getPlaceByName from '@core/providers/google-places-api';
import { GooglePlace } from '@core/interfaces';

function useGetPlaceByName(
  cityName: string,
  initialData?: GooglePlace
): { loading: boolean; data?: GooglePlace; mutate: any } {
  const { data, mutate, error } = useSWR<GooglePlace>(
    ['useGetPlaceByName', cityName],
    getPlaceByName,
    { initialData }
  );
  const loading = !data && !error;
  return {
    loading,
    data,
    mutate,
  };
}

export default useGetPlaceByName;
