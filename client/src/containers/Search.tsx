import type { FormEventHandler } from "react";
import React, { useState } from "react";
import { useQuery } from "react-query";

import type { Search as SearchType } from "../utils/types";
import fetchJson from "../utils/fetchJson";
import GenericError from "../components/GenericError";
import Loading from "../components/Loading";
import MovieList from "../components/MovieList";
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
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(0);

  const { isLoading, isFetched, isError, error, data } = useQuery(
    ["search", title, page],
    ({ signal }) => fetchSearch(computeSearchParams(title, page), signal),
    { enabled: title.length > 0 }
  );

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    setTitle(search);
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
            setPage={setPage}
          />
        )
      )}
    </div>
  );
};

export default Search;