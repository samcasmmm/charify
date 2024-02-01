import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: '',
  mode: 'cors',
});

export const useApi = createApi({
  baseQuery,
  tagTypes: [''],
  endpoints: () => ({}),
});
