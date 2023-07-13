/* eslint-disable @typescript-eslint/no-unused-vars */
import { useInjectReducer } from "src/utils/redux-injectors";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "src/utils/@reduxjs/toolkit";
import { IFarmerDetails } from "./types";
import { farmerDetailsSaga } from "./saga";

export const initialState: IFarmerDetails = {
  isGettingFarmer: false,
};

export const detailsSlice = createSlice({
  name: "farmerDetails",
  initialState,
  reducers: {},
});

export const { actions: farmerDetailActions } = detailsSlice;

export const useFarmerDetailSlice = () => {
  useInjectReducer({ key: detailsSlice.name, reducer: detailsSlice.reducer });
  return { actions: detailsSlice.actions };
};
