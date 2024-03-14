import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

// const songNamed = "beautiful things";
// const artistNamed = "benson boone";
// const optionss = {
//   method: "GET",
//   url: "https://genius-song-lyrics1.p.rapidapi.com/search/",
//   params: {
//     q: `${songNamed} ${artistNamed}`,
//     per_page: "10",
//     page: "1",
//   },
//   headers: {
//     "X-RapidAPI-Key": "3884d3808fmsheb555fa9cda0c6fp1805aajsna701b39d8757",
//     "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
//   },
// };

// try {
//   const response = await axios.request(optionss);
//   console.log(response.data.hits[0].result);
// } catch (error) {
//   console.error(error);
// }

// const options = {
//   method: "GET",
//   url: "https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/",
//   params: { id: "9782708" },
//   headers: {
//     "X-RapidAPI-Key": "3884d3808fmsheb555fa9cda0c6fp1805aajsna701b39d8757",
//     "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
//   },
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data.lyrics.lyrics.body.html);
// } catch (error) {
//   console.error(error);
// }
// function stripHtmlTags(html) {
//   return html.replace(/<[^>]+>/g, "");
// }

// this is real code
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
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `tracks/related?track_id=${songid}`,
    }),
    // getSongsByGenre: builder.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
    // getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
    // getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    // getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),

    // getSongDetails: builder.query({
    //   query: async ({ songid }) => {
    //     // Use the song name and artist name to search for the song details on Shazam
    //     const [songName, artistName] = songid
    //       .split(separator)
    //       .map((item) => item.trim());
    //     // console.log(songName, artistName);
    //     const shazamOptions = {
    //       method: "GET",
    //       url: "https://genius-song-lyrics1.p.rapidapi.com/search",
    //       params: {
    //         term: `${songName} ${artistName}`,
    //       },
    //     };
    //     const shazamResponse = await axios.request(shazamOptions);
    //     const trackId = shazamResponse.data.tracks.hits[0].result.id;

    //     const geniusOptions = {
    //       method: "GET",
    //       url: "https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/",
    //       params: { id: trackId },
    //       headers: {
    //         "X-RapidAPI-Key":
    //           "3884d3808fmsheb555fa9cda0c6fp1805aajsna701b39d8757",
    //         "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
    //       },
    //     };
    //     const geniusResponse = await axios.request(geniusOptions);
    //     return {
    //       shazamDetails: shazamResponse.data,
    //       lyrics: geniusResponse.data.lyrics.body.html, // Modify this if you want to strip HTML tags
    //     };
    //   },
    // }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
