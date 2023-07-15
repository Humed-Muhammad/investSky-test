export interface ICategoryTypes {
  collectionId: string;
  collectionName: 'category';
  created: string;
  id: string;
  name: string;
  updated: string;
}

export type ReturnType = { items: ICategoryTypes[] };
