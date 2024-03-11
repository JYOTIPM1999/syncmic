import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vkjsnK4bKzuUzVLza",
    "X-RapidAPI-Host": "",
  },
};
// fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLza"
        // import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY
      );

      return headers;
    },
  }),
});
