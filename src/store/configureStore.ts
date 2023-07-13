/**
 * Create the store with dynamic reducers
 */

import {
  configureStore,
  getDefaultMiddleware,
  StoreEnhancer,
} from "@reduxjs/toolkit";
import { createInjectorsEnhancer } from "redux-injectors";
import createSagaMiddleware, { Saga, Task } from "redux-saga";
import { createReducer } from "./reducers";
import { api } from "./service";

export function configureAppStore() {
  // Create the store with saga middleware
  const middlewares = [api.middleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga: function <S extends Saga<any[]>>(
        saga: S,
        ...args: Parameters<S>
      ): Task<any> {
        throw new Error("Function not implemented.");
      },
    }),
  ] as StoreEnhancer[];

  const store = configureStore({
    reducer: createReducer(),
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
      ...middlewares,
    ],
    devTools: process.env.NODE_ENV !== "production",
    enhancers,
  });

  return { store };
}
