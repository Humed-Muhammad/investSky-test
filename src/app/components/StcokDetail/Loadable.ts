/**
 *
 * Asynchronously loads the component for Login
 *
 */

import { lazyLoad } from 'src/utils/loadable';

export const StockDetail = lazyLoad(
  () => import('./index'),
  module => module.StockDetail,
);
