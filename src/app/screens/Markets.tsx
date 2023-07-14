import { StyleSheet } from 'react-native';

import EditScreenInfo from 'src/app/components/EditScreenInfo';
import { RootTabScreenProps } from 'src/utils/types/types';
import { useLocalization } from 'src/locales';
import { Button, Container, Text } from '../components/Core';
import { useDispatch } from 'react-redux';
import { useDefaultLayoutSlice } from './defaultLayout/slice';
import { colors } from 'src/utils/constants/themeColors';
import { useFonts, Poppins_100Thin_Italic } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function Markets({ navigation }: RootTabScreenProps<'Markets'>) {
  const { i18n } = useLocalization({
    lang: 'ja',
  });
  const dispatch = useDispatch();
  const { actions } = useDefaultLayoutSlice();
  let [fontsLoaded] = useFonts({
    Poppins_100Thin_Italic,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Container style={styles.container}>
      <Container
        alignItems="flex-start"
        bg={colors.primary}
        width="100%"
        height={250}
      >
        <Text variant="h2" color="white" fontFamily="Poppins_100Thin_Italic">
          Markets
        </Text>
        <Button
          bg="primary"
          p="2"
          borderRadius="6"
          onPress={() => {
            dispatch(actions.changeThemeMode('light'));
          }}
        >
          <Text color="text">Change Theme</Text>
        </Button>
      </Container>
      <Text>
        {i18n.t('welcome')} {i18n.t('name')}
      </Text>
      <EditScreenInfo path="/screens/Markets.tsx" />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
