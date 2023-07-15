import { api } from 'src/store/services';
import { ICategoryTypes } from '../types';

type ReturnType = { items: ICategoryTypes[] };

const marketsApi = api.injectEndpoints({
  endpoints: build => ({
    fetchCategories: build.query<ICategoryTypes[], string>({
      query: endpoint => endpoint,
      transformResponse: (baseQueryReturnValue: ReturnType) => {
        return baseQueryReturnValue.items;
      },
      providesTags: () => ['Categories'],
    }),
    fetchStocksByCategory: build.query({
      query: endpoint => endpoint,
    }),
  }),
  overrideExisting: false,
});

export const { useFetchCategoriesQuery } = marketsApi;
