/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from 'src/utils/types/types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Markets: {
            screens: {
              Markets: 'Markets',
            },
          },
          News: {
            screens: {
              News: 'News',
            },
          },

          Login: {
            screens: {
              Login: 'Login',
            },
          },
          Home: {
            screens: {
              Home: 'Home',
            },
          },
          // [LINK NEW SCREEN ABOVE] < Needed for linking screen          // End
        },
      },
      Notification: 'Notification',
      NotFound: '*',
    },
  },
};

export default linking;
