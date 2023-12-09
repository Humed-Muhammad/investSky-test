/* eslint-disable @typescript-eslint/no-use-before-define */
import Animated, {
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { DefaultTheme } from 'styled-components/native';

interface Props {
  name: keyof typeof FontAwesome.glyphMap;
  color: string;
  isFocused: boolean;
  theme: DefaultTheme;
}

export default function AnimatedTabBarIcon({
  color,
  name,
  isFocused,
  theme,
}: Props) {
  const config = {
    duration: 10,
  };

  const style = useAnimatedStyle(() => {
    if (isFocused) {
      return {
        backgroundColor: withTiming(theme.colors.tabBarIconBg, config),
        borderRadius: withTiming(100, config),
        elevation: withTiming(5, config),
      };
    }
    return {
      position: withTiming('relative', config),
      backgroundColor: withTiming('transparent', config),
      borderRadius: withTiming(0, config),
      elevation: withTiming(0, config),
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, style]}>
        <FontAwesome
          size={isFocused ? 17 : 15}
          name={name}
          color={isFocused ? theme.colors.primary : color}
        />
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
  },
});
