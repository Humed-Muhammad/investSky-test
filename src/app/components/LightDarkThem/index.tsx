import React from 'react';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from 'src/utils/theme';
import { useAppDispatch } from 'src/utils/hooks/redux';
import { useDefaultLayoutSlice } from 'src/app/screens/defaultLayout/slice';
import { Flex } from '../Core';

export const ThemeController = () => {
  const { theme, colorMode } = useTheme();
  const dispatch = useAppDispatch();
  const { actions } = useDefaultLayoutSlice();
  return (
    <Flex flexDirection="row">
      {colorMode === 'light' ? (
        <Pressable
          onPress={() => dispatch(actions.changeThemeMode('dark'))}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <FontAwesome
            name="moon-o"
            size={20}
            color={theme?.colors.white}
            style={{ marginRight: 15 }}
          />
        </Pressable>
      ) : (
        <Pressable
          onPress={() => dispatch(actions.changeThemeMode('light'))}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <FontAwesome
            name="sun-o"
            size={20}
            color={theme?.colors.white}
            style={{ marginRight: 15 }}
          />
        </Pressable>
      )}
    </Flex>
  );
};
