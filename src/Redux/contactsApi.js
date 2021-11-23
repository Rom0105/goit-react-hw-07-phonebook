// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactApi = createApi({
//   reducerPath: 'contactApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://619796975953f10017d23e40.mockapi.io/api/v1',
//   }),
//   tagTypes: ['Contact'],
//   endpoints: builder => ({
//     fetchContacts: builder.query({
//       query: () => '/contacts',
//       providesTags: ['Contact'],
//     }),
//     deleteContact: builder.mutation({
//       query: contactId => ({
//         url: `/contacts/${contactId}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//     createContact: builder.mutation({
//       query: body => ({
//         url: '/contacts',
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//   }),
// });

// export const {
//   useFetchContactsQuery,
//   useDeleteContactMutation,
//   useCreateContactMutation,
// } = contactApi;
