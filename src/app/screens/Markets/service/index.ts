import { pb } from 'src/utils/pocketbase';
import useSWR from 'swr';
import { ICategoryTypes } from '../types';

export const useMarketList = () => {
  const fetcher = () => pb.collection('category').getFullList<ICategoryTypes>();
  const { data, error, isLoading, isValidating } = useSWR(`category`, fetcher);

  return { data, error, isLoading, isValidating };
};
