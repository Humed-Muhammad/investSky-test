/**
 *
 * Asynchronously loads the component for Home
 *
 */

import { lazyLoad } from 'src/utils/loadable';

export const Markets = lazyLoad(
  () => import('./index'),
  module => module.Markets,
);
