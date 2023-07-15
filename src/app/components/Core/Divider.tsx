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
import { BoxProps } from './types';

interface DividerProps extends BoxProps {
  variant: 'horizontal' | 'vertical';
}

export const Divider = styled.View<DividerProps>`
  ${props => `

    height: ${props.variant === 'horizontal' ? 0.5 : props.height || '100%'}
    width: ${props.variant === 'vertical' ? 0.5 : props.width || '100%'}

    `}
  ${compose(
    color,
    layout,
    space,
    typography,
    variant,
    border,
    zIndex,
    position,
  )};
`;
