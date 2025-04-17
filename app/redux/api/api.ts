
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://palestine-vote-server.vercel.app' }),
  tagTypes: ["Vote"],
  endpoints: (builder) => ({
    getVotes: builder.query({
      query: () => ({
        url: "/votes",
        method: "GET",
      }),
      providesTags: ['Vote']
    }),
    addVote: builder.mutation({
      query: (data) => ({
        url: "/votes",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Vote"]
    })
  }),
});


export const {useGetVotesQuery, useAddVoteMutation} = baseApi;
