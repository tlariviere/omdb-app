import axios from "axios";

import type { OmdbRes } from "../utils/types";
import omdbConfig from "../constants/omdb";
import handleOmdbQuery from "../utils/handleOmdbQuery";

const fetchMovieData = async (imdbId: string) => {
  const { data } = await axios.get<OmdbRes>("http://www.omdbapi.com/", {
    params: { apikey: omdbConfig.OMDB_API_KEY, i: imdbId },
  });
  return data;
};

const fetchMovie = async (imdbId: string) =>
  handleOmdbQuery(fetchMovieData(imdbId));

export default fetchMovie;
