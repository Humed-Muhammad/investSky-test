import { RootTabScreenProps } from 'src/utils/types/types';
import { colors } from 'src/utils/constants/themeColors';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { Search } from 'src/app/components/Search/Loadable';
import { Box, Container, Flex, Text } from '../../components/Core';
import { MarketTypeList } from '../../components/MarketTypeList/Loadable';

SplashScreen.preventAutoHideAsync();

export default function Markets({ navigation }: RootTabScreenProps<'Markets'>) {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
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
    <Container onLayout={onLayoutRootView}>
      <Flex
        justifyContent="space-between"
        p={3}
        bg={colors.primary}
        width="100%"
        height={220}
      >
        <Box>
          <Text my={1} variant="h1" color="white" fontFamily="Poppins_700Bold">
            Markets
          </Text>
          <Search />
        </Box>
        <MarketTypeList />
      </Flex>
    </Container>
  );
}
