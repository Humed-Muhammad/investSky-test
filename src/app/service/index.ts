import { pb } from 'src/utils/pocketbase';
import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';
import { IStockPricesResponse } from 'src/utils/types/types';
import { ICategoryTypes, IStocksType } from '../screens/Markets/types';

export const useMarketList = () => {
  const fetcher = () => pb.collection('category').getFullList<ICategoryTypes>();
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    `category`,
    fetcher,
  );

  return { data, error, isLoading, isValidating, mutate };
};

export const useStockFetcher = (
  categoryId: string,
  fetch: boolean,
  searchQuery?: string,
) => {
  const fetcher = () =>
    pb.collection('stocks').getList<IStocksType>(1, 50, {
      filter: `categoryId ~ "${categoryId}" || stockSymbol ~ "${searchQuery}" || stockName ~ "${searchQuery}"`,
    });
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    !fetch ? null : [`stocks`, categoryId],
    fetcher,
  );

  return { data, error, isLoading, isValidating, mutate };
};

export const useStockPricesFetcher = (stockId: string) => {
  const fetcher = () =>
    pb.collection('stockPrices').getFullList<IStockPricesResponse>({
      filter: `stockId ~ "${stockId}"`,
    });
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    [`stocks`, stockId],
    fetcher,
  );

  return { data, error, isLoading, isValidating, mutate };
};

export const useStockSearch = (searchQuery?: string) => {
  const fetcher = () =>
    pb.collection('stocks').getList<IStocksType>(1, 50, {
      filter: `stockSymbol ~ "${searchQuery}" || stockName ~ "${searchQuery}"`,
    });
  const { data, error, isLoading, isValidating, mutate } = useSWRImmutable(
    searchQuery !== '' ? [`stocks`, searchQuery] : null,
    fetcher,
  );

  return { data, error, isLoading, isValidating, mutate };
};
