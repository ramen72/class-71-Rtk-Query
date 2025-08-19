import { createApi, fetchBaseQuery,  } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com/"}),
    tagTypes:["Posts"],
    endpoints: (builder)=>({
        getPost: builder.query({
            query:()=>"posts",
            providesTags:["Posts"]
        }),
        getPostById: builder.query({
            query:(id)=>`posts/${id}`,
        })
    })
})
export const {useGetPostQuery, useGetPostByIdQuery } = postApi;