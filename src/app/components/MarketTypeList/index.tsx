import React, { useEffect, useRef } from 'react';

import { FlatList, SafeAreaView, Dimensions, Animated } from 'react-native';
import { colors } from 'src/utils/constants/themeColors';
import { Container, Text } from '../Core';
import { useMarketList } from '../../service';
import { ICategoryTypes, IStocksConfig } from '../../screens/Markets/types';

interface Props {
  setStocksConfig: React.Dispatch<React.SetStateAction<IStocksConfig>>;
  stocksConfig: IStocksConfig;
}

export const MarketTypeList = ({ setStocksConfig, stocksConfig }: Props) => {
  const { data } = useMarketList();

  const translateX = useRef(
    new Animated.Value(Dimensions.get('window').height),
  ).current;
  useEffect(() => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setStocksConfig({
      categoryId: data?.[0]?.id as string,
      fetch: true,
    });
  }, [data]);

  const getItem = (item: ICategoryTypes) => {
    // Function for click on an item
    setStocksConfig({
      categoryId: item.id,
      fetch: true,
    });
  };

  const ItemView = ({ item }: { item: ICategoryTypes }) => {
    return (
      // Single Comes here which will be repeatative for the FlatListItems
      <Animated.View style={{ transform: [{ translateX }] }}>
        <Text
          color={
            stocksConfig.categoryId === item.id ? 'white' : colors.gray[400]
          }
          fontWeight={stocksConfig.categoryId === item.id ? 'bold' : 'normal'}
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
