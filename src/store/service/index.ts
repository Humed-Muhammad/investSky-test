import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ROUTE } from "src/utils/constants";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_ROUTE,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Markets", "Portfolio", "News"],
  endpoints: () => ({}),
});
