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
import { TextProps } from './types';
import { lightTheme } from 'src/utils/theme/lightTheme';

const variants = {
  h1: {
    fontWeight: 'bold',
    fontSize: lightTheme.headings.h1,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: lightTheme.headings.h2,
  },
  h3: {
    fontWeight: 'bold',
    fontSize: lightTheme.headings.h3,
  },
  h4: {
    fontWeight: 'bold',
    fontSize: lightTheme.headings.h4,
  },
  h5: {
    fontWeight: 'bold',
    fontSize: lightTheme.headings.h5,
  },
  h6: {
    fontWeight: 'bold',
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
