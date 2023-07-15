/**
 *
 * Asynchronously loads the component for Login
 *
 */

import { lazyLoad } from 'src/utils/loadable';

export const StocksList = lazyLoad(
  () => import('./index'),
  module => module.StocksList,
);
