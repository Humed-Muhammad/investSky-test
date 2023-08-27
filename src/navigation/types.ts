import { FontAwesome } from '@expo/vector-icons';
import { RootTabParamList, RootTabScreenProps } from 'src/utils/types/types';
import { DefaultTheme } from 'styled-components/native';

export interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

export interface TabBarOptionsProps<T extends keyof RootTabParamList> {
  screenProps: RootTabScreenProps<T>;
  name: keyof typeof FontAwesome.glyphMap;
  screenName: T;
  showHeaderStyle?: boolean;
  theme: DefaultTheme;
}
