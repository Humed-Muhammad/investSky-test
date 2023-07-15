import React, { useEffect, useState, useRef } from 'react';

import { FlatList, SafeAreaView, Dimensions, Animated } from 'react-native';
import { colors } from 'src/utils/constants/themeColors';
import { Container, Text } from '../Core';
import { useFetchCategoriesQuery } from '../../screens/Markets/service';
import { ICategoryTypes } from '../../screens/Markets/types';

export const MarketTypeList = () => {
  const { data } = useFetchCategoriesQuery('category/records');
  const [activeItem, setActiveItem] = useState<string | undefined>();
  const translateX = useRef(
    new Animated.Value(Dimensions.get('window').height),
  ).current;
  useEffect(() => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setActiveItem(data?.[0]?.id);
  }, [data]);

  const getItem = (item: ICategoryTypes) => {
    // Function for click on an item
    setActiveItem(item.id);
  };

  const ItemView = ({ item }: { item: ICategoryTypes }) => {
    return (
      // Single Comes here which will be repeatative for the FlatListItems
      <Animated.View style={{ transform: [{ translateX }] }}>
        <Text
          color={activeItem === item.id ? 'white' : colors.gray[400]}
          fontWeight={activeItem === item.id ? 'bold' : 'normal'}
          mx={2}
          onPress={() => getItem(item)}
        >
          {item.name}
        </Text>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
      </Container>
    </SafeAreaView>
  );
};
