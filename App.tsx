import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import useCachedResources from 'src/utils/hooks/useCachedResources';

import { Provider } from 'react-redux';
import { configureAppStore } from 'src/store/configureStore';
import DefaultLayout from 'src/app/screens/defaultLayout';
import { SWRConfig } from 'swr';

import NetInfo from '@react-native-community/netinfo';
import { AppState, AppStateStatus } from 'react-native';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const { store } = configureAppStore();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <SWRConfig
          value={{
            provider: () => new Map(),
            isVisible: () => {
              return true;
            },
            initFocus(callback) {
              let appState = AppState.currentState;

              const onAppStateChange = (nextAppState: AppStateStatus) => {
                /* If it's resuming from background or inactive mode to active one */
                if (
                  appState.match(/inactive|background/) &&
                  nextAppState === 'active'
                ) {
                  callback();
                }
                appState = nextAppState;
              };

              // Subscribe to the app state change events
              const subscription = AppState.addEventListener(
                'change',
                onAppStateChange,
              );

              return () => {
                subscription.remove();
              };
            },
            initReconnect(callback) {
              // eslint-disable-next-line unused-imports/no-unused-vars
              const unsubscribe = NetInfo.addEventListener(state => {
                if (state.isConnected) {
                  callback();
                }
              });
            },
          }}
        >
          <DefaultLayout />
        </SWRConfig>
      </Provider>
    </SafeAreaProvider>
  );
}
