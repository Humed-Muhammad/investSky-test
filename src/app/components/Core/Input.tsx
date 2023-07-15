import styled from 'styled-components/native';
import {
  color,
  compose,
  layout,
  space,
  typography,
  variant,
  border,
  zIndex,
  position,
} from 'styled-system';
import { ButtonProps } from './types';
import { colors } from 'src/utils/constants/themeColors';
import { lightTheme } from 'src/utils/theme/lightTheme';

export const Input = styled.TextInput<ButtonProps>`
  background-color: ${colors.inputBg};
  padding: ${lightTheme.spaces['8']};
  border-radius: ${lightTheme.spaces[6]}
  width: 300px;
  ${compose(
    color,
    layout,
    space,
    typography,
    variant,
    border,
    zIndex,
    position,
  )}
`;
