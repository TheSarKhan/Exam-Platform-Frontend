const BASE_URL = import.meta.env.VITE_API_URL;
import Cookies from "js-cookie";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { store } from "../../redux/store.jsx";
import { setAccessToken } from "../slices/authSlice";

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: headers => {
      const token = Cookies.get("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  })(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshToken = Cookies.get("refreshToken");

    if (refreshToken) {
      const refreshResult = await fetchBaseQuery({ baseUrl: BASE_URL })(
        {
          url: "/auth/refresh",
          method: "POST",
          params: { refreshToken },
        },
        api,
        extraOptions
      );
      console.log(refreshResult);

      if (refreshResult.data) {
        const newAccessToken = refreshResult.data?.data?.accessToken || refreshResult.data.accessToken;
        api.dispatch(setAccessToken(newAccessToken));
        result = await fetchBaseQuery({
          baseUrl: BASE_URL,
          prepareHeaders: headers => {
            headers.set("Authorization", `Bearer ${newAccessToken}`);
            return headers;
          },
        })(args, api, extraOptions);
      } else {
        // api.dispatch(logout());
      }
    }
  }

  return result;
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    register: builder.mutation({
      query: body => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
    forgetPassword: builder.mutation({
      query: email => ({
        url: "auth/forget-password",
        method: "POST",
        params: { email },
      }),
    }),
    verifyCode: builder.mutation({
      query: ({ email, code }) => ({
        url: "auth/verify-email-code",
        method: "POST",
        params: { email, code },
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ email, password, uuid }) => ({
        url: "auth/reset-password",
        method: "POST",
        params: { email, password, uuid },
      }),
    }),
  }),
});

export const termsApi = createApi({
  reducerPath: "termsApi",
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    getTerms: builder.query({
      query: () => ({
        url: "terms",
        method: "GET",
      }),
    }),
  }),
});

export const { useRegisterMutation, useForgetPasswordMutation, useVerifyCodeMutation, useResetPasswordMutation } = authApi;
export const { useGetTermsQuery } = termsApi;
