import { useState } from 'react';
import { Search } from 'src/app/components/Search/Loadable';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useLoadFonts } from 'src/utils/hooks/useLoadFonts';
import { Box, Container, Flex, Text } from '../../components/Core';
import { MarketTypeList } from '../../components/MarketTypeList/Loadable';
import { IStocksConfig } from './types';

export function Markets() {
  const [stocksConfig, setStocksConfig] = useState<IStocksConfig>({
    fetch: false,
    categoryId: '',
  });

  const [fontsLoaded] = useLoadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Flex width="100%" height="100%">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled={false}
        style={{
          width: '100%',
        }}
      >
        <ScrollView>
          <Container alignItems="flex-start" width="100%">
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
                  fontFamily="Poppins"
                  fontWeight="800"
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
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </Flex>
  );
}
