import { DefaultTheme } from "styled-components/native";
import { colors } from "../constants/themeColors";

export const lightTheme: DefaultTheme = {
  colors,
  spaces: {
    2: "2px",
    4: "4px",
    6: "6px",
    8: "8px",
    10: "10px",
    12: "12px",
    14: "14px",
    16: "16px",
    18: "18px",
    20: "20px",
    22: "22px",
  },
  borders: [
    0,
    "1px solid",
    "2px solid",
    "3px solid",
    "4px solid",
    "5px solid",
    "6px solid",
    "7px solid",
    "8px solid",
  ],
  fonts: {
    poppins: "Poppins, sans-serif",
    jost: "Jost ,sans-serif",
    mulish: "Mulish ,sans-serif",
    nunito: "Nunito, sans-serif",
    josefinSans: '"Josefin Sans",sans-serif',
    josefinSlab: '"Josefin Slab", sans-serif',
    montserrat: "Montserrat, sans-serrif",
  },
  fontSizes: {
    xs: 8,
    sm: 16,
    md: 20,
    lg: 40,
    xl: 50,
    "2xl": 70,
    "3xl": 100,
  },
  fontWeights: {
    100: 100,
    200: 200,
    300: 300,
    400: 400,
    500: 500,
    600: 600,
    700: 700,
    800: 800,
    900: 900,
  },
  shadows: {
    normal: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },
  zIndex: {
    1: 1,
    5: 5,
    10: 10,
    15: 15,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    60: 60,
    70: 70,
    80: 80,
    90: 90,
    100: 100,
  },
  radii: {
    0: 0,
    2: 2,
    4: 4,
    6: 6,
    8: 8,
    10: 10,
    20: 20,
    30: 30,
    full: "50%",
  },
  sizes: {
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    60: 60,
    70: 70,
    80: 80,
    90: 90,
    100: 100,
    quarter: "25%",
    half: "50%",
    semiFull: "75%",
    full: "100%",
  },
};
