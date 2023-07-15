import { Appearance, ColorSchemeName } from 'react-native';
import { useEffect, useState } from 'react';

import { useDefaultLayoutSlice } from 'src/app/screens/defaultLayout/slice';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

export const useTheme = () => {
  const themeMode = useAppSelector(state => state?.defaultLayout?.themeMode);
  const theme = useAppSelector(state => state?.defaultLayout?.theme);
  const dispatch = useAppDispatch();
  const { actions } = useDefaultLayoutSlice();

  const [colorMode, setColorMode] = useState<ColorSchemeName>(themeMode);
  const handleThemeChange = (value: ColorSchemeName) => {
    setColorMode(value);
    if (value === 'light') {
      dispatch(actions.changeTheme(lightTheme));
    } else {
      dispatch(actions.changeTheme(darkTheme));
    }
  };
  useEffect(() => {
    handleThemeChange(themeMode);

    Appearance.addChangeListener(value => {
      handleThemeChange(value.colorScheme);
    });
  }, [themeMode, dispatch]);

  return { colorMode, theme };
};
