import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';
import { Search } from 'src/app/components/Search/Loadable';
import { StocksList } from 'src/app/components/StocksList/Loadable';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Box, Container, Flex, Text } from '../../components/Core';
import { MarketTypeList } from '../../components/MarketTypeList/Loadable';
import { IStocksConfig } from './types';
import { useStockFetcher } from '../../service';

SplashScreen.preventAutoHideAsync();

export function Markets() {
  const [stocksConfig, setStocksConfig] = useState<IStocksConfig>({
    fetch: false,
    categoryId: '',
  });

  const { isLoading, data } = useStockFetcher(
    stocksConfig.categoryId,
    stocksConfig.fetch,
  );

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
    <Flex bg="background" width="100%" height="100%">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled={false}
        style={{
          width: '100%',
        }}
      >
        <ScrollView>
          <Container
            alignItems="flex-start"
            width="100%"
            onLayout={onLayoutRootView}
          >
            <Flex
              justifyContent="space-between"
              p={3}
              bg="primary"
              width="100%"
              height={220}
              zIndex={1}
            >
              <Box zIndex={1}>
                <Text
                  my={1}
                  variant="h1"
                  color="white"
                  fontFamily="Poppins_700Bold"
                >
                  Markets
                </Text>
                <Search />
              </Box>

              <MarketTypeList
                stocksConfig={stocksConfig}
                setStocksConfig={setStocksConfig}
              />
            </Flex>
            <Flex width="100%">
              <ScrollView>
                {isLoading ? (
                  <Box mt={6}>
                    <ActivityIndicator size="large" />
                  </Box>
                ) : (
                  <StocksList data={data!} />
                )}
              </ScrollView>
            </Flex>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </Flex>
  );
}
