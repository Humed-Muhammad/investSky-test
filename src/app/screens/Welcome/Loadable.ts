/**
*
* Asynchronously loads the component for Welcome
*
*/

import { lazyLoad } from 'src/utils/loadable';

export const Welcome = lazyLoad(() => import('./index'), module => module.Welcome);