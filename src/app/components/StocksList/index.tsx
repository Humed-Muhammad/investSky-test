import React, { useEffect } from 'react';
import { IStocksType } from 'src/app/screens/Markets/types';
import { usePortfolioSlice } from 'src/app/screens/Portfolio/slice';
import { useAppDispatch } from 'src/utils/hooks/redux';
import { ListResult } from 'pocketbase';
import { Flex } from '../Core';
import { List } from './List';

interface Props {
  data: ListResult<IStocksType>;
}

export const StocksList = ({ data }: Props) => {
  const { actions } = usePortfolioSlice();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.selectStock(data?.items?.[0]));
  }, [data]);

  return (
    <Flex flexGrow={1} justifyContent="space-between" p={3} width="100%">
      {data?.items?.map(item => (
        <List key={item.id} {...item} />
      ))}
    </Flex>
  );
};
