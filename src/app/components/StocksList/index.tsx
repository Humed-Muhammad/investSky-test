import React from 'react';
import { useStockFetcher } from 'src/app/screens/Markets/service';
import { IStocksConfig } from 'src/app/screens/Markets/types';
import { Flex } from '../Core';
import { List } from './List';

interface Props {
  stocksConfig: IStocksConfig;
}

export const StocksList = ({ stocksConfig }: Props) => {
  const { data } = useStockFetcher(stocksConfig.categoryId, stocksConfig.fetch);

  return (
    <Flex justifyContent="space-between" p={3} width="100%">
      {data?.items?.map(item => (
        <List {...item} />
      ))}
    </Flex>
  );
};
