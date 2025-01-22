import { useQuery } from 'react-query';
import axios from 'axios';

export const useFetchData = (url) => {
  return useQuery(['fetchData', url], async () => {
    const { data } = await axios.get(url);
    return data;
  }, {
    retry: 1, // Retry once in case of failure
    refetchOnWindowFocus: false, // Avoid refetch on window focus
  });
};