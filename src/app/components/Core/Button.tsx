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
import { ButtonProps } from "./types";

export const Button = styled.TouchableOpacity<ButtonProps>`
  ${compose(
    color,
    layout,
    space,
    typography,
    variant,
    border,
    zIndex,
    position
  )}
`;
