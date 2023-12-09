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
import { appColors } from 'src/utils/colors';
import { Colors } from 'src/utils/theme/variables';
import { TextProps } from './types';

const headingVariants = {
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
  margin: 0px;
  padding: 0px;
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
        primary: {
          color: Colors.primary,
          fontWeight: 500,
        },
        base: {
          fontSize: lightTheme.fontSizes.md,
          fontWeight: 'normal',
        },
        ellipsis: {
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        },
        'list-item': {
          color: appColors.slateBlue,
          fontSize: 12,
          fontStyle: 'normal',
          fontWeight: 400,
        },
        note: {
          color: '#8E8E93',
          fontSize: 13,
          fontStyle: 'normal',
          fontWeight: 400,
          textTransform: 'lowercase',
        },
        subtitle: {
          color: '#0F3844',
          fontSize: 14,
          fontWeight: '400',
        },
        depicted: {
          textAlign: 'center',
          fontSize: 12,
          fontWeight: '500',
          textTransform: 'uppercase',
        },
        ...headingVariants,
      },
    }),
  )};
`;
