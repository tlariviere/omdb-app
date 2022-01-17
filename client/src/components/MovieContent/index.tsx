import React from "react";

import type { Movie } from "../../utils/types";
import MetaData from "../MetaData";
import Ratings from "../Ratings";
import Details from "../MovieDetails";
import Poster from "../Poster";
import styles from "./MovieContent.module.scss";

const Plot: React.FC = ({ children }) => {
  return (
    <div className={styles.Plot}>
      <h3>Storyline</h3>
      <p>{children}</p>
    </div>
  );
};

const Awards: React.FC = ({ children }) => {
  return (
    <div>
      <h3>Awards</h3>
      <p>{children}</p>
    </div>
  );
};

const MovieContent: React.FC<{ movie: Movie }> = ({ movie }) => (
  <article className={styles.MovieContent}>
    <h1>{movie.Title}</h1>
    <MetaData
      type={movie.Type}
      year={movie.Year}
      rated={movie.Rated}
      runtime={movie.Runtime}
      metascore={movie.Metascore}
      genres={movie.Genre}
    />
    <div>
      <Poster src={movie.Poster} />
      <div>
        <Ratings imdbRating={movie.imdbRating} imdbVotes={movie.imdbVotes} />
        <Details
          actors={movie.Actors}
          boxOffice={movie.BoxOffice}
          language={movie.Language}
          country={movie.Country}
          director={movie.Director}
          released={movie.Released}
          website={movie.Website}
          writer={movie.Writer}
        />
      </div>
    </div>
    <Plot>{movie.Plot}</Plot>
    <Awards>{movie.Awards}</Awards>
  </article>
);

export default MovieContent;
