import styled from "styled-components/native";
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
} from "styled-system";
import { BoxProps } from "./types";

export const Container = styled.View<BoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${compose(
    color,
    layout,
    space,
    typography,
    variant,
    border,
    zIndex,
    position
  )};
`;
