import React from "react";
import { Link } from "react-router-dom";

import type { Search, SearchEntry } from "../utils/types";
import capitalize from "../utils/capitalize";
import config from "../constants/search";
import PosterComponent from "./Poster";
import styles from "./MovieList.module.scss";

const MovieEntry: React.FC<SearchEntry> = ({
  Poster,
  Title,
  Type,
  Year,
  imdbID,
}) => {
  const movieUrl = `/movie/${imdbID}`;
  return (
    <section className={styles.MovieEntry}>
      <Link to={movieUrl}>
        <PosterComponent src={Poster} />
      </Link>
      <div>
        <h4>
          <Link to={movieUrl}>{Title}</Link>
        </h4>
        <p className={styles.MiddleDots}>
          <span>{capitalize(Type)}</span>
          <span>{Year}</span>
        </p>
      </div>
    </section>
  );
};

interface PaginationProps {
  nbPage: number;
  pageStartIndex: number;
  page: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  nbPage,
  pageStartIndex,
  page,
  setPage,
}) => {
  return (
    <nav>
      <div className="btn-group" role="group">
        <button
          type="button"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          Previous
        </button>
        {Array(Math.min(nbPage, config.maxDisplayedPage))
          .fill(0)
          .map((_, index) => {
            const pageIndex = pageStartIndex + index;
            return (
              <button
                key={pageIndex}
                type="button"
                className={page === pageIndex ? styles.Active : ""}
                onClick={() => setPage(pageIndex)}
                disabled={page === pageIndex}
              >
                {pageIndex + 1}
              </button>
            );
          })}
        <button
          type="button"
          onClick={() => setPage(page + 1)}
          disabled={page === nbPage - 1}
        >
          Next
        </button>
      </div>
    </nav>
  );
};

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
