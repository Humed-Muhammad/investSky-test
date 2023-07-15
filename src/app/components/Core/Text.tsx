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
import { lightTheme } from 'src/utils/theme/lightTheme';
import { TextProps } from './types';

const variants = {
  h1: {
    fontSize: lightTheme.headings.h1,
  },
  h2: {
    fontSize: lightTheme.headings.h2,
  },
  h3: {
    fontSize: lightTheme.headings.h3,
  },
  h4: {
    fontSize: lightTheme.headings.h4,
  },
  h5: {
    fontSize: lightTheme.headings.h5,
  },
  h6: {
    fontSize: lightTheme.headings.h6,
  },
};

export const Text = styled.Text<TextProps>`
  ${compose(
    color,
    layout,
    space,
    typography,
    border,
    zIndex,
    position,
    variant({
      variants: {
        base: {
          fontSize: lightTheme.fontSizes.md,
          fontWeight: 'normal',
        },
        ellipsis: {
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        },
        ...variants,
      },
    }),
  )};
`;
