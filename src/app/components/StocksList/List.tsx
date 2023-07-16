import React from 'react';
import { IStocksType } from 'src/app/screens/Markets/types';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { currencyFormat } from 'src/utils/utilityFunctions';
import { Pressable } from 'react-native';
import { usePortfolioSlice } from 'src/app/screens/Portfolio/slice';
import { useAppDispatch } from 'src/utils/hooks/redux';
import { useLinkTo } from '@react-navigation/native';
import { useStockPricesFetcher } from 'src/app/service';
import { colors } from 'src/utils/constants/themeColors';
import { useTheme } from 'src/utils/theme';
import { Box, Flex, Text } from '../Core';
import { BezierChart } from '../BezierChart/Loadable';

export const List = (item: IStocksType) => {
  const { colorMode } = useTheme();
  const { actions } = usePortfolioSlice();
  const { data } = useStockPricesFetcher(item?.id);
  const dispatch = useAppDispatch();
  const linkTo = useLinkTo();
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  const { stockName, stockSymbol, currentPrice, percentageGain } = item;
  return (
    <Pressable
      onPress={() => {
        dispatch(actions.selectStock(item));
        linkTo('/Portfolio');
      }}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <Flex
        borderBottomWidth={1}
        borderColor={colorMode === 'light' ? 'gray.100' : 'gray.700'}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        height={80}
      >
        <Box width="40%" my={2}>
          <Text color="text" variant="h5" fontFamily="Poppins_700Bold">
            {stockSymbol}
          </Text>
          <Text variant="h6" color="gray.400">
            {stockName}
          </Text>
        </Box>
        <BezierChart
          color={percentageGain < 0 ? colors.error : colors.success}
          data={data?.[0]?.data || []}
          height={65}
          width={50}
          strokeWidth={2}
        />
        <Flex alignItems="flex-end" width="30%">
          <Text color="text" variant="h5" fontFamily="Poppins_700Bold">
            {currencyFormat(currentPrice)}
          </Text>
          <Text color={percentageGain < 0 ? 'error' : 'success'} variant="h6">
            {`${percentageGain > 0 ? '+' : ''}${percentageGain}%`}
          </Text>
        </Flex>
        {/* <Divider variant="horizontal" /> */}
      </Flex>
    </Pressable>
  );
};
