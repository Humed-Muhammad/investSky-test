/**
 *
 * Asynchronously loads the component for Login
 *
 */

import { lazyLoad } from 'src/utils/loadable';

export const MarketTypeList = lazyLoad(
  () => import('./index'),
  module => module.MarketTypeList,
);
