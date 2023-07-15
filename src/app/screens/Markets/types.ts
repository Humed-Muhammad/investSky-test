export interface ICategoryTypes {
  collectionId: string;
  collectionName: 'category';
  created: string;
  id: string;
  name: string;
  updated: string;
}

export interface IStocksType {
  id: string;
  categoryId: string[];
  closePrice: number;
  collectionId: string;
  collectionName: string;
  created: string;
  currentPrice: number;
  lastTradePrice: number;
  marketValue: number;
  outstandingPrice: number;
  percentageGain: number;
  stockName: string;
  stockSymbol: string;
  updated: string;
}

export interface IStocksConfig {
  fetch: boolean;
  categoryId: string;
}

export type ReturnType = { items: ICategoryTypes[] };
