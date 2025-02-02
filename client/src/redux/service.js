import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addMyInfo } from "./slice";

export const serviceApi = createApi({
    reducerPath: 'serviceApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api',
        credentials: 'include',
        prepareHeaders: (headers) => {
            const token = document.cookie.split('; ').find(row => row.startsWith('token='));
            if (token) {
                headers.set('Authorization', `Bearer ${token.split('=')[1]}`); // Set the Authorization header
            }
            return headers;
        },
    }),
    keepUnusedDataFor: 60 * 60 * 24 * 7,
    tagTypes: ['Post', 'User', 'Me'],
    endpoints: (builder) => ({
        signin: builder.mutation({
            query: (data) => ({
                url: 'signin',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["Me"],
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Me"],
        }),
        myInfo: builder.query({
            query: () => ({
                url: 'me',
                method: 'GET',
            }),
            providesTags: ['Me'],
            async onQueryStarted(params, { dispatch, queryFulfilled }) {
                try {
                    const data = await queryFulfilled;
                    dispatch(addMyInfo(data));
                } catch (err) {
                    console.log(err);
                }
            }
        }),
        logoutMe: builder.mutation({
            query: () => ({
                url: 'logout',
                method: 'POST',
            }),
            invalidatesTags: ["Me"],
        })
    }),
});

export const { 
    useSigninMutation, 
    useLoginMutation, 
    useMyInfoQuery,
    useLogoutMeMutation,
} = serviceApi;
