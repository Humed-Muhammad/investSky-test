import React from 'react';
import { useAppSelector } from 'src/utils/hooks/redux';
import { selectPortfolio } from 'src/app/screens/Portfolio/slice/selectors';
import { currencyFormat } from 'src/utils/utilityFunctions';
import { useTheme } from 'src/utils/theme';
import { Box, Button, Container, Flex, Text } from '../Core';

export const StockDetail = () => {
  const currentStock = useAppSelector(selectPortfolio);
  const { colorMode } = useTheme();
  return (
    <Container p={4}>
      <Flex
        mt={3}
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
      >
        <Box>
          <Text color="text" variant="h5">
            Close Price
          </Text>
        </Box>
        <Box>
          <Text fontWeight="bold" color="text" variant="h4">
            {currencyFormat(currentStock?.closePrice || 0)}
          </Text>
        </Box>
      </Flex>
      <Flex
        my={3}
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
      >
        <Box>
          <Text color="text" variant="h5">
            Last Trade Price
          </Text>
        </Box>
        <Box>
          <Text fontWeight="bold" color="text" variant="h4">
            {currencyFormat(currentStock?.lastTradePrice || 0)}
          </Text>
        </Box>
      </Flex>
      <Flex
        mb={3}
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
      >
        <Box>
          <Text color="text" variant="h5">
            Outstanding
          </Text>
        </Box>
        <Box>
          <Text fontWeight="bold" color="text" variant="h4">
            {currencyFormat(currentStock?.outstandingPrice || 0)}
          </Text>
        </Box>
      </Flex>
      <Flex
        mb={3}
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
      >
        <Box>
          <Text color="text" variant="h5">
            Market Value
          </Text>
        </Box>
        <Box>
          <Text fontWeight="bold" color="text" variant="h4">
            {currencyFormat(currentStock?.marketValue || 0)}
          </Text>
        </Box>
      </Flex>
      <Button
        style={({ pressed }) => ({
          opacity: pressed ? 0.7 : 1,
        })}
        variant={colorMode === 'light' ? 'secondary' : 'primary'}
        width="100%"
        mt={3}
      >
        Add to Portfolio
      </Button>
    </Container>
  );
};
