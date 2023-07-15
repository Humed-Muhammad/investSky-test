import React from 'react';
import { IStocksType } from 'src/app/screens/Markets/types';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { currencyFormat } from 'src/utils/utilityFunctions';
import { Box, Flex, Text } from '../Core';

export const List = ({
  stockName,
  stockSymbol,
  currentPrice,
  percentageGain,
}: IStocksType) => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Flex
      borderBottom={2}
      borderColor="red"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box my={2}>
        <Text variant="h5" fontFamily="Poppins_700Bold">
          {stockSymbol}
        </Text>
        <Text variant="h6" color="gray.400">
          {stockName}
        </Text>
      </Box>
      <Text variant="h6" color="gray.600">
        Graph
      </Text>
      <Text variant="h5" fontFamily="Poppins_700Bold">
        {currencyFormat(currentPrice)}
      </Text>
      {/* <Divider variant="horizontal" /> */}
    </Flex>
  );
};
