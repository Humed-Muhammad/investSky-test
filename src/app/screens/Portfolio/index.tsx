/**
 *
 * Portfolio
 *
 */
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { Box, Button, Flex, Text } from 'src/app/components/Core';
import { useAppSelector } from 'src/utils/hooks/redux';
import { LineChart } from 'react-native-chart-kit';
import { currencyFormat } from 'src/utils/utilityFunctions';
import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import { filterDate } from 'src/utils/constants';
import { DateType } from 'src/utils/types/types';
import { selectPortfolio } from './slice/selectors';

export function Portfolio() {
  const [activeDate, setActiveDate] = useState<DateType>('1M');
  const currentStock = useAppSelector(selectPortfolio);
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
      <Box width="100%">
        <LineChart
          data={{
            labels: [],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel={'Rs'}
          chartConfig={{
            backgroundGradientFrom: 'white',
            backgroundGradientTo: 'white',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
              paddingRight: 0,
              paddingLeft: 0,
            },
          }}
          withHorizontalLabels={false}
          withInnerLines={false}
          withOuterLines={false}
          withDots={false}
          withShadow={false}
          bezier
          style={{
            borderRadius: 16,
            paddingRight: 0,
            paddingLeft: 8,
          }}
        />
      </Box>
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
    </Flex>
  );
}
