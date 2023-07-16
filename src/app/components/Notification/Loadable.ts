/**
 *
 * Asynchronously loads the component for Login
 *
 */

import { lazyLoad } from 'src/utils/loadable';

export const Notification = lazyLoad(
  () => import('./index'),
  module => module.Notification,
);
