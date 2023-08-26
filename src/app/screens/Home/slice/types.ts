import { IStocksType } from '../../Markets/types';

/* --- STATE --- */
export interface PortfolioState {
  selectedStocks: IStocksType | undefined;
}
