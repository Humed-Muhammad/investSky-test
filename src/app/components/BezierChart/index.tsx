import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { colors } from 'src/utils/constants/themeColors';
import { Box } from '../Core';

interface Props {
  width?: number;
  height?: number;
  data: number[];
  color?: string;
  strokeWidth?: number;
}

export const BezierChart = ({
  width,
  data,
  height,
  color,
  strokeWidth,
}: Props) => {
  return (
    <Box>
      <LineChart
        data={{
          labels: [],
          datasets: [
            {
              data: data || [],
            },
          ],
        }}
        width={width || Dimensions.get('window').width} // from react-native
        height={height || 220}
        yAxisLabel={'Rs'}
        chartConfig={{
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 2, // optional, defaults to 2dp
          strokeWidth: strokeWidth || 3,
          color: () => color || colors.gray[700],
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
  );
};
