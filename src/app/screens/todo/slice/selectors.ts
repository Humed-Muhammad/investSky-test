import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/types';
import { initialState } from '.';

export const selectFarmer = createSelector(
  [(state: RootState) => state?.farmerDetails],
  state => state.isGettingFarmer,
);
