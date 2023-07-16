/**
 *
 * Portfolio
 *
 */
import React, { useState } from 'react';
import { Button, Container, Flex, Text } from 'src/app/components/Core';
import { useAppSelector } from 'src/utils/hooks/redux';
import { currencyFormat } from 'src/utils/utilityFunctions';
import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import { filterDate } from 'src/utils/constants';
import { DateType } from 'src/utils/types/types';
import { BezierChart } from 'src/app/components/BezierChart/Loadable';
import { useStockPricesFetcher } from 'src/app/service';
import { ActivityIndicator } from 'react-native';
import { StockDetail } from 'src/app/components/StcokDetail/Loadable';
import { selectPortfolio } from './slice/selectors';

export function Portfolio() {
  const [activeDate, setActiveDate] = useState<DateType>('1M');
  const currentStock = useAppSelector(selectPortfolio);
  const { data, isLoading } = useStockPricesFetcher(currentStock?.id as string);

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Flex pt={4} bg="white" height="100%">
      <Flex px={4}>
        <Text fontFamily="Poppins_700Bold" variant="h1">
          {currencyFormat(currentStock?.currentPrice || 0)}
        </Text>

        <Text
          margin={0}
          color={
            Number(currentStock?.percentageGain || 0) < 0 ? 'error' : 'success'
          }
          variant="h6"
        >
          {`${Number(currentStock?.percentageGain || 0) > 0 ? '+' : ''}${
            currentStock?.percentageGain
          }%`}
        </Text>
      </Flex>
      {isLoading ? (
        <Container height={220}>
          <ActivityIndicator />
        </Container>
      ) : (
        <BezierChart data={data?.[0]?.data || []} />
      )}
      <Flex justifyContent="space-around" flexDirection="row">
        {filterDate.map((date, key) => (
          <Button
            borderRadius={18}
            height={35}
            width={35}
            key={key}
            onPress={() => {
              setActiveDate(date);
            }}
            variant="ghost"
            bg={activeDate === date ? 'gray.800' : 'white'}
            color={activeDate === date ? 'white' : 'gray.800'}
          >
            <Text
              textAlign="center"
              variant="h6"
              fontFamily="Poppins_500Medium"
            >
              {date}
            </Text>
          </Button>
        ))}
      </Flex>
      <StockDetail />
    </Flex>
  );
}
