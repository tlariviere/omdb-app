import axios from "axios";
import memoize from "memoizee";

import type { OmdbRes } from "../utils/types";
import omdbConfig from "../constants/omdb";
import memoizeOptions from "../constants/memoizeOptions";
import handleOmdbQuery from "../utils/handleOmdbQuery";

const memoizedFetchMovie = memoize(async (imdbId: string) => {
  const { data } = await axios.get<OmdbRes>("http://www.omdbapi.com/", {
    params: { apikey: omdbConfig.OMDB_API_KEY, i: imdbId },
  });
  return data;
}, memoizeOptions);

const fetchMovie = async (imdbId: string) =>
  handleOmdbQuery(memoizedFetchMovie(imdbId));

export default fetchMovie;
