import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'src/utils/@reduxjs/toolkit';
import { useInjectReducer } from 'src/utils/redux-injectors';
import { PortfolioState } from './types';
import { IStocksType } from '../../Markets/types';

export const initialState: PortfolioState = {
  selectedStocks: undefined,
};

const slice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    selectStock(state, action: PayloadAction<IStocksType | undefined>) {
      state.selectedStocks = action.payload;
    },
  },
});

export const { actions: portfolioActions } = slice;

export const usePortfolioSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = usePortfolioSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
