import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Navigation from 'src/navigation';

import { useTheme } from 'src/utils/theme';

export default function DefaultLayout() {
  const { colorMode } = useTheme();

  return (
    <>
      <Navigation colorScheme={colorMode} />
      <StatusBar />
    </>
  );
}
