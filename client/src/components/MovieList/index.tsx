import React from "react";

import type { Search } from "../../utils/types";
import config from "../../constants/search";
import MovieEntry from "../MovieEntry";
import Pagination from "../Pagination";
import useWindowSize from "../../hooks/useWindowSize";
import styles from "./MovieList.module.scss";

interface MovieListProps {
  search: Search;
  page: number;
  setPage: (page: number) => void;
}

const MovieList: React.FC<MovieListProps> = ({ search, page, setPage }) => {
  const { width } = useWindowSize();
  const maxDisplayedPage =
    width && width < 550
      ? config.maxDisplayedPageXsScreen
      : config.maxDisplayedPage;
  const nbPage = Math.ceil(parseInt(search.totalResults, 10) / config.pageSize);
  const pageStartIndex = Math.max(
    Math.min(page - maxDisplayedPage / 2, nbPage - maxDisplayedPage),
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
          maxDisplayedPage={maxDisplayedPage}
        />
      )}
    </div>
  );
};

export default MovieList;
