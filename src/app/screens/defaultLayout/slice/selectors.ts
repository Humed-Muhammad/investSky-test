import { createSelector } from "@reduxjs/toolkit";
import { ColorSchemeName } from "react-native";

import { RootState } from "src/types";
import { DefaultTheme } from "styled-components/native";
import { initialState } from ".";
import { DefaultLayoutState } from "./types";

export const selectSlice = (state: RootState) =>
  state?.defaultLayout || initialState;

export const selectTheme = (state: RootState) => state?.defaultLayout?.theme;

export const selectThemeMode = (state: RootState) =>
  state?.defaultLayout?.themeMode;
