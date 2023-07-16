/**
 *
 * Asynchronously loads the component for Login
 *
 */

import { lazyLoad } from 'src/utils/loadable';

export const BezierChart = lazyLoad(
  () => import('./index'),
  module => module.BezierChart,
);
