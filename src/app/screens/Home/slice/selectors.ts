import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state?.portfolio || initialState;

export const selectPortfolio = createSelector(
  [selectSlice],
  state => state.selectedStocks,
);
