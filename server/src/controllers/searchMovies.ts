import axios from "axios";
import memoize from "memoizee";

import type { OmdbRes } from "../utils/types";
import omdbConfig from "../constants/omdb";
import memoizeOptions from "../constants/memoizeOptions";
import handleOmdbQuery from "../utils/handleOmdbQuery";

const memoizedSearchMovies = memoize(async (title: string, page: number) => {
  const { data } = await axios.get<OmdbRes>("http://www.omdbapi.com/", {
    params: { apikey: omdbConfig.OMDB_API_KEY, s: title, page },
  });
  return data;
}, memoizeOptions);

const searchMovies = async (title: string, page: number) =>
  handleOmdbQuery(memoizedSearchMovies(title, page));

export default searchMovies;
