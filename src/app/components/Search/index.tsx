import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Box, Input } from '../Core';

export const Search = () => {
  return (
    <Box mb={2} position="relative">
      <Feather
        style={{
          position: 'absolute',
          zIndex: 99,
          top: 13,
          left: 15,
        }}
        name="search"
        color="white"
        size={25}
      />
      <Input
        color="white"
        placeholder="Search markets"
        p={12}
        pl={'60px'}
        width="auto"
        placeholderTextColor="white"
      />
    </Box>
  );
};
