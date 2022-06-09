import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const api_key: String = '6dcc216133b93aa7fd311eb61b2980ac';
// const query: String = 'Avengers';
export const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/search/movie',
  }),
  endpoints: builder => ({
    getMovies: builder.query({
      query: query => `?api_key=${api_key}&query=${query}`,
    }),
  }),
});

export const {useGetMoviesQuery} = moviesApi;
