import { RootTabParamList } from 'src/utils/types/types';
import AnimatedTabBarIcon from 'src/app/components/Core/AnimatedTabBarIcon';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { StyleProp, TextStyle } from 'react-native';
import { TabBarIconProps, TabBarOptionsProps } from './types';

export const tabBarOptions = <T extends keyof RootTabParamList>({
  screenProps: { navigation },
  name,
  screenName,
  showHeaderStyle,
  theme,
}: TabBarOptionsProps<T>): BottomTabNavigationOptions => {
  const tabBarLabelStyle: StyleProp<TextStyle> = {
    color: theme.colors.text,
    fontWeight: theme.fontWeights[800],
    fontSize: 10,
  };

  return {
    headerTitle: '',
    tabBarLabelStyle,
    title: navigation.isFocused() ? screenName : '',
    tabBarIcon: ({ color }: TabBarIconProps) => {
      return (
        <AnimatedTabBarIcon
          name={name}
          color={navigation.isFocused() ? theme.colors.text : color}
          isFocused={navigation.isFocused()}
          theme={theme}
        />
      );
    },
    headerStyle: showHeaderStyle && {
      backgroundColor: theme?.colors.primary,
      shadowColor: 'transparent', // this covers iOS
      elevation: 0, // this covers Android
    },
    tabBarStyle: {
      // backgroundColor: theme?.colors.gray[900],
      height: 60,
      // marginBottom: 10,
      // borderRadius: 10,
      // width: '95%',
      // alignSelf: 'center',
      elevation: 2,
      paddingTop: 5,
      paddingBottom: 5,
    },
  };
};
