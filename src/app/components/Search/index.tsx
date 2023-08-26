import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { useTheme } from 'src/utils/theme';
import { Box, Container, Input } from '../Core';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { colorMode } = useTheme();

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
        onChangeText={text => setSearchTerm(text)}
      />
      {searchTerm ? (
        <Container
          style={{
            zIndex: 1,
            elevation: 3,
          }}
          position="absolute"
          width="100%"
          top={55}
        >
          <ScrollView
            style={{
              width: '100%',
              backgroundColor: colorMode === 'light' ? 'white' : 'black',
            }}
          >
            {/* {isLoading ? (
              <Box my={3}>
                <ActivityIndicator />
              </Box>
            ) : (
              !data?.items?.length && (
                <Text my={3} variant="h4">
                  Result not found
                </Text>
              )
            )} */}
          </ScrollView>
        </Container>
      ) : null}
    </Box>
  );
};
