import { DefaultTheme } from 'styled-components/native';
import { lightTheme } from './lightTheme';

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    primary: '#152E4D',
    secondary: '#FFC700',
    background: '#1E1E1E',
    text: '#F8F8F8',
    accent: '#FF4500',
    success: '#28A745',
    error: '#DC3545',
  },
};
