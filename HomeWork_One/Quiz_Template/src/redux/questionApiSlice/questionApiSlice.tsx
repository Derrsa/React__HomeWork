// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//
// // Define a service using a base URL and expected endpoints
// export const questionsApi = createApi({
//   reducerPath: "questionApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://opentdb.com/api.php?amount=10",
//   }),
//   endpoints: (builder) => ({
//     // setQuestions: builder.query({
//     //   query: ({ difficult, type }) =>
//     //     `&category=23&difficulty=${difficult}&type=${type}`,
//     // }),
//     getQuestions: builder.query({
//       query: () => ``,
//     }),
//   }),
// });
//
// export const { useSetQuestionsQuery, useGetQuestionsQuery } = questionsApi;
