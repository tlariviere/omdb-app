import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import type { Movie as MovieType } from "../utils/types";
import fetchJson from "../utils/fetchJson";
import GenericError from "../components/GenericError";
import Loading from "../components/Loading";
import MovieContent from "../components/MovieContent";

interface Params {
  imdbId: string;
}

const Movie: React.FC = () => {
  const { imdbId } = useParams<"imdbId">() as Params;
  const { isLoading, isError, error, data } = useQuery(
    ["movie", imdbId],
    ({ signal }) => fetchJson<MovieType>(`/api/movie/${imdbId}`, { signal })
  );

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <GenericError message={(error as Error).message} />
      ) : (
        <MovieContent movie={data as MovieType} />
      )}
    </div>
  );
};

export default Movie;
