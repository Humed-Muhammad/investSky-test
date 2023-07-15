/**
 *
 * Asynchronously loads the component for Login
 *
 */

import { lazyLoad } from 'src/utils/loadable';

export const Search = lazyLoad(
  () => import('./index'),
  module => module.Search,
);
