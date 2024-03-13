import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
// const options = {
//   method: "GET",
//   params: {
//     id: "296831279",
//     l: "en-US",
//   },
//   headers: {
//     "X-RapidAPI-Key": "3884d3808fmsheb555fa9cda0c6fp1805aajsna701b39d8757",
//     "X-RapidAPI-Host": "shazam.p.rapidapi.com",
//   },
// };
// fetch("https://shazam.p.rapidapi.com/songs/v2/get-details", options)
//   // .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const options = {
  method: "GET",
  url: "https://shazam.p.rapidapi.com/songs/v2/get-details",
  params: {
    id: "1217912247",
    l: "en-US",
  },
  headers: {
    "X-RapidAPI-Key": "3884d3808fmsheb555fa9cda0c6fp1805aajsna701b39d8757",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data.data[0]);
} catch (error) {
  console.error(error);
}

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "3884d3808fmsheb555fa9cda0c6fp1805aajsna701b39d8757"
        // import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/track" }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/track/info?track_id=${songid}`,
    }),
    // getSongsByGenre: builder.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
    // getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
    // getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    // getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
    // getSongRelated: builder.query({ query: ({ songid }) => `v1/tracks/related?track_id=${songid}` }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
