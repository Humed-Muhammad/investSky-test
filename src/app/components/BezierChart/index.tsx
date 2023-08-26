// import React from 'react';
// import { LineChart } from 'react-native-chart-kit';
// import { Dimensions } from 'react-native';

// import { useTheme } from 'src/utils/theme';
// import { Box } from '../Core';

// interface Props {
//   width?: number;
//   height?: number;
//   data: number[];
//   color?: string;
//   strokeWidth?: number;
// }

// export const BezierChart = ({
//   width,
//   data,
//   height,
//   color,
//   strokeWidth,
// }: Props) => {
//   const { colorMode } = useTheme();
//   return (
//     <Box>
//       <LineChart
//         data={{
//           labels: [],
//           datasets: [
//             {
//               data: data || [],
//             },
//           ],
//         }}
//         width={width || Dimensions.get('window').width} // from react-native
//         height={height || 220}
//         yAxisLabel={'Rs'}
//         chartConfig={{
//           backgroundColor: colorMode === 'light' ? 'white' : 'black',
//           backgroundGradientFrom: colorMode === 'light' ? 'white' : 'black',
//           backgroundGradientTo: colorMode === 'light' ? 'white' : 'black',
//           decimalPlaces: 2, // optional, defaults to 2dp
//           strokeWidth: strokeWidth || 3,
//           color: () =>
//             !color && colorMode === 'light'
//               ? colors.gray[700]
//               : color || 'white',
//           style: {
//             borderRadius: 16,
//             paddingRight: 0,
//             paddingLeft: 0,
//           },
//         }}
//         withHorizontalLabels={false}
//         withInnerLines={false}
//         withOuterLines={false}
//         withDots={false}
//         withShadow={false}
//         bezier
//         style={{
//           borderRadius: 16,
//           paddingRight: 0,
//           paddingLeft: 8,
//         }}
//       />
//     </Box>
//   );
// };

export {};
