import { pb } from 'src/utils/pocketbase';
import useSWR from 'swr';
import { ICategoryTypes, IStocksType } from '../types';

export const useMarketList = () => {
  const fetcher = () => pb.collection('category').getFullList<ICategoryTypes>();
  const { data, error, isLoading, isValidating } = useSWR(`category`, fetcher);

  return { data, error, isLoading, isValidating };
};

export const useStockFetcher = (categoryId: string, fetch: boolean) => {
  const fetcher = () =>
    pb.collection('stocks').getList<IStocksType>(1, 50, {
      filter: `categoryId ~ "${categoryId}"`,
    });
  const { data, error, isLoading, isValidating } = useSWR(
    !fetch ? null : [`stocks`, categoryId],
    fetcher,
  );

  return { data, error, isLoading, isValidating };
};
