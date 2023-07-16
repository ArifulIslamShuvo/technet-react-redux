import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getProdects: builder.query({
      query: () => `/products`,
    }),
    singleProdect: builder.query({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const { useGetProdectsQuery, useSingleProdectQuery } = api;
