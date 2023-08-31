import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import useCachedResources from 'src/utils/hooks/useCachedResources';

import { Provider } from 'react-redux';
import { configureAppStore } from 'src/store/configureStore';
import DefaultLayout from 'src/app/screens/defaultLayout';
import { PaperProvider } from 'react-native-paper';
import { theme } from 'src/utils/theme/paperTheme';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const { store } = configureAppStore();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <DefaultLayout />
        </PaperProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
