/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Login: undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Markets: undefined;
  TabTwo: undefined;
  Login?: undefined;

  Portfolio?: undefined;
  // [INSERT NEW SCREEN KEY ABOVE] < Needed for generating screen
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type DateType = '1D' | '7D' | '1M' | '3M' | '1Y';

export interface IStockPricesResponse {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  data: number[];
  expand: {};
  stockId: string;
  updated: string;
}

export type IStockPrices = IStockPricesResponse[];
