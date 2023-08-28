/* eslint-disable @typescript-eslint/no-use-before-define */
import Animated, {
  withTiming,
  useAnimatedStyle,
  Easing,
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
    duration: 200,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
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
          size={isFocused ? 22 : 20}
          name={name}
          color={isFocused ? theme.colors.secondary : color}
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
    height: 45,
    width: 45,
  },
});
