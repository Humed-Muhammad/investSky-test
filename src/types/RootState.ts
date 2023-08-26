import { DefaultLayoutState } from 'src/app/screens/defaultLayout/slice/types';

import { PortfolioState } from 'src/app/screens/Home/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  defaultLayout?: DefaultLayoutState;
  portfolio?: PortfolioState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
