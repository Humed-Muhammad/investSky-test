/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export const Colors = {
  // Example colors:

  primary: '#3A75C4',
  secondary: '#FFD700',
  background: '#FFFFFF',
  text: '#333333',
  accent: '#FF5722',
  success: '#28A745',
  error: '#DC3545',
  tabBarIconBg: '#616161',
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
};

export const NavigationColors = {
  primary: Colors.primary,
};

/**
 * FontSize
 */
export const FontSize = {
  small: 16,
  regular: 20,
  large: 40,
};

/**
 * Metrics Sizes
 */
const tiny = 5; // 10
const small = tiny * 2; // 10
const regular = tiny * 3; // 15
const large = regular * 2; // 30
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};

export const fonts = {
  poppins: 'Poppins',
  jost: 'Jost',
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
};
