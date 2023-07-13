import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/types";
import { initialState } from ".";

// const selectSlice = (state: RootState) => state?.farmerDetails || initialState;

export const selectFarmer = createSelector(
  [(state: RootState) => state?.farmerDetails],
  (state) => state.isGettingFarmer
);
