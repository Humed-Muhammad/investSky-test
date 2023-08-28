import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Navigation from 'src/navigation';
import { ThemeProvider } from 'styled-components/native';

import { useTheme } from 'src/utils/theme';
import { lightTheme } from 'src/utils/theme/lightTheme';

export default function DefaultLayout() {
  const { colorMode, theme } = useTheme();

  return (
    <ThemeProvider theme={theme || lightTheme}>
      <Navigation colorScheme={colorMode} />
      <StatusBar />
    </ThemeProvider>
  );
}
