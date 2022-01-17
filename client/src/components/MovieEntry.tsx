import React from "react";
import { Link } from "react-router-dom";

import type { SearchEntry } from "../utils/types";
import capitalize from "../utils/capitalize";
import PosterComponent from "./Poster";
import styles from "./MovieEntry.module.scss";

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

export default MovieEntry;
