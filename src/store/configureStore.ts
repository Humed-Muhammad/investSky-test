/**
 * Create the store with dynamic reducers
 */

import {
  configureStore,
  getDefaultMiddleware,
  StoreEnhancer,
} from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import { Task } from 'redux-saga';
import { createReducer } from './reducers';
import { api } from './service';

export function configureAppStore() {
  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga(): Task<any> {
        throw new Error('Function not implemented.');
      },
    }),
  ] as StoreEnhancer[];

  const store = configureStore({
    reducer: createReducer(),
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
      api.middleware,
    ],
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });

  return { store };
}
