// styled.d.ts
import 'styled-components/native';

export type FontWeightType =
  | 'bold'
  | 'normal'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

declare module 'styled-components/native' {
  export interface DefaultTheme {
    sizes: {
      10: number;
      20: number;
      30: number;
      40: number;
      50: number;
      60: number;
      70: number;
      80: number;
      90: number;
      100: number;
      quarter: string;
      half: string;
      semiFull: string;
      full: string;
    };
    colors: {
      text: string;
      primary: string;
      secondary: string;
      background: string;
      gray: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      tabBarIconBg: string;
      success: string;
      error: string;
      accent: string;
    };
    spaces: {
      2: string;
      4: string;
      6: string;
      8: string;
      10: string;
      12: string;
      14: string;
      16: string;
      18: string;
      20: string;
      22: string;
    };
    fontSizes: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      '2xl': number;
      '3xl': number;
    };
    fontWeights: {
      100: FontWeightType;
      200: FontWeightType;
      300: FontWeightType;
      400: FontWeightType;
      500: FontWeightType;
      600: FontWeightType;
      700: FontWeightType;
      800: FontWeightType;
      900: FontWeightType;
    };
    fonts: {
      poppins: string;
      jost: string;
    };
    borders: Array<string | number>;
    radii: {
      0: number;
      2: number;
      4: number;
      6: number;
      8: number;
      10: number;
      20: number;
      30: number;
      full: string;
    };
    zIndex: {
      1: number;
      5: number;
      10: number;
      15: number;
      20: number;
      30: number;
      40: number;
      50: number;
      60: number;
      70: number;
      80: number;
      90: number;
      100: number;
    };
    shadows: {
      normal: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    headings: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
  }
}
