import styled from 'styled-components/native';
import { BoxProps } from './types';
import { Box } from './Box';

export const Container = styled(Box)<BoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
`;
