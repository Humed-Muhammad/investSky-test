/**
 *
 * Asynchronously loads the component for Profile
 *
 */

import { lazyLoad } from 'src/utils/loadable';

export const Profile = lazyLoad(
  () => import('./index'),
  module => module.Profile,
);
