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
  flexbox,
  flexBasis,
  flexDirection,
} from 'styled-system';
// import { colors } from 'src/utils/constants/themeColors';
import { ReactNode } from 'react';
import { ActivityIndicator } from 'react-native';
import { ButtonProps } from './types';
import { Text } from './Text';
import { Box } from './Box';

export const ButtonBase = styled.Pressable<ButtonProps>`
  padding: 10px;
  border-radius: 5px;
  width: auto;
  ${compose(
    color,
    layout,
    space,
    typography,
    variant({
      variants: {
        primary: {},
        secondary: {},
        ghost: {
          backgroundColor: 'transparent',
        },
        normal: {},
      },
    }),
    border,
    zIndex,
    position,
    flexbox,
    flexBasis,
    flexDirection,
  )}
`;

interface Props extends ButtonProps {
  isLoading?: boolean;
  icon?: ReactNode;
}

export const Button = ({ children, isLoading, icon, ...rest }: Props) => {
  return (
    <ButtonBase
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
      {...rest}
    >
      {isLoading && (
        <ActivityIndicator style={{ marginRight: 3 }} color="white" />
      )}
      {icon && <Box mx={2}>{icon}</Box>}
      <Text textAlign="center" color={rest.color || 'white'}>
        {children}
      </Text>
    </ButtonBase>
  );
};
