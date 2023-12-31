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
    background-color: ${String(props.color) || ''};
    height: ${props.variant === 'horizontal' ? '1px' : props.height || '100%'};
    width: ${props.variant === 'vertical' ? '1px' : props.width || '100%'};

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
