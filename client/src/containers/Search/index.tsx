import type { FormEventHandler } from "react";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQueryClient, useQuery } from "react-query";

import type { Search as SearchType } from "../../utils/types";
import fetchJson from "../../utils/fetchJson";
import GenericError from "../../components/GenericError";
import Loading from "../../components/Loading";
import MovieList from "../../components/MovieList";
import config from "../../constants/search";
import styles from "./Search.module.scss";

const fetchSearch = async (
  searchParams: URLSearchParams,
  signal?: AbortSignal
) => {
  return fetchJson<SearchType>(`/api/search?${searchParams.toString()}`, {
    signal,
  });
};

const computeSearchParams = (title: string, page: number) => {
  const params: Record<string, string> = { title };
  if (page > 0) {
    params.page = page.toString();
  }
  return new URLSearchParams(params);
};

const Search: React.FC = () => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title") ?? "";
  const page = searchParams.has("page")
    ? parseInt(searchParams.get("page") as string, 10)
    : 0;

  const { isLoading, isFetched, isError, error, data } = useQuery(
    ["search", title, page],
    ({ signal }) => fetchSearch(searchParams, signal),
    { enabled: title.length > 0 }
  );

  useEffect(() => {
    setSearch(title);
  }, [title]);

  // Prefetch next page
  useEffect(() => {
    if (data) {
      const nbPage = Math.ceil(
        parseInt(data.totalResults, 10) / config.pageSize
      );

      if (page < nbPage - 1) {
        void queryClient.prefetchQuery(
          ["search", title, page + 1],
          ({ signal }) =>
            fetchSearch(computeSearchParams(title, page + 1), signal)
        );
      }
    }
  }, [data, title, page, queryClient]);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    setSearchParams(computeSearchParams(search, page));
  };

  return (
    <div className={styles.Search}>
      <h1>The Movie Database</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={search}
            className="form-control"
            placeholder="Search by title..."
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type="submit" disabled={search.length < 3}>
            <i className="bi bi-search" />
          </button>
        </div>
      </form>

      {isLoading ? (
        <Loading />
      ) : isError ? (
        <GenericError message={(error as Error).message} />
      ) : (
        isFetched && (
          <MovieList
            search={data as SearchType}
            page={page}
            setPage={(newPage: number) =>
              setSearchParams(computeSearchParams(title, newPage))
            }
          />
        )
      )}
    </div>
  );
};

export default Search;
