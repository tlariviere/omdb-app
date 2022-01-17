import React from "react";

import type { Search } from "../utils/types";
import config from "../constants/search";
import MovieEntry from "./MovieEntry";
import Pagination from "./Pagination";
import styles from "./MovieList.module.scss";

interface MovieListProps {
  search: Search;
  page: number;
  setPage: (page: number) => void;
}

const MovieList: React.FC<MovieListProps> = ({ search, page, setPage }) => {
  const nbPage = Math.ceil(parseInt(search.totalResults, 10) / config.pageSize);
  const pageStartIndex = Math.max(
    Math.min(
      page - config.maxDisplayedPage / 2,
      nbPage - config.maxDisplayedPage
    ),
    0
  );

  return (
    <div className={styles.MovieList}>
      <div>
        {search.Search.map((entry) => (
          <MovieEntry key={entry.Title} {...entry} />
        ))}
      </div>
      {nbPage > 1 && (
        <Pagination
          nbPage={nbPage}
          pageStartIndex={pageStartIndex}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default MovieList;
