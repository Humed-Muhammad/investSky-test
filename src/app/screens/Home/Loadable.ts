/**
 *
 * Asynchronously loads the component for Home
 *
 */

import { lazyLoad } from 'src/utils/loadable';

export const Home = lazyLoad(
  () => import('./index'),
  module => module.Home,
);
