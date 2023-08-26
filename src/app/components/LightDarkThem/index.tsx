import React from 'react';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from 'src/utils/theme';
import { useAppDispatch } from 'src/utils/hooks/redux';
import { useDefaultLayoutSlice } from 'src/app/screens/defaultLayout/slice';
import { Flex } from '../Core';

export const ThemeController = ({ color }: { color: string }) => {
  const { colorMode } = useTheme();
  const dispatch = useAppDispatch();
  const { actions } = useDefaultLayoutSlice();
  return (
    <Flex flexDirection="row" style={{ marginRight: 15 }}>
      {colorMode === 'light' ? (
        <Pressable
          onPress={() => dispatch(actions.changeThemeMode('dark'))}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <FontAwesome color={color} name="moon-o" size={18} />
        </Pressable>
      ) : (
        <Pressable
          onPress={() => dispatch(actions.changeThemeMode('light'))}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <FontAwesome color={color} name="sun-o" size={17} />
        </Pressable>
      )}
    </Flex>
  );
};
