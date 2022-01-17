import React from "react";

import type { Movie } from "../utils/types";
import capitalize from "../utils/capitalize";
import Poster from "./Poster";
import styles from "./MovieContent.module.scss";

interface MetaDataProps {
  genres: string;
  metascore: string;
  rated: string;
  runtime: string;
  type: string;
  year: string;
}

const MetaData: React.FC<MetaDataProps> = ({
  type,
  year,
  rated,
  runtime,
  metascore,
  genres,
}) => {
  return (
    <div>
      <div className={styles.MiddleDots}>
        <span>{capitalize(type)}</span>
        <span>{year}</span>
        <span>{rated}</span>
        {runtime !== "N/A" && <span>{runtime}</span>}
        {metascore !== "N/A" && <span>{metascore} Metascore</span>}
      </div>
      <div className={styles.Genres}>
        {genres.split(", ").map((genre) => (
          <span key={genre}>{genre}</span>
        ))}
      </div>
    </div>
  );
};

interface RatingsProps {
  imdbRating: string;
  imdbVotes: string;
}

const Ratings: React.FC<RatingsProps> = ({ imdbRating, imdbVotes }) => {
  return (
    <div className={styles.Ratings}>
      <h3>IMDb Rating</h3>
      <div>
        <i className={`bi bi-star-fill ${styles.Star}`} />
        <p>
          <span>{imdbRating}</span>
          {imdbRating !== "N/A" && ` /10 (${imdbVotes} votes)`}
        </p>
      </div>
    </div>
  );
};

interface DetailsProps {
  actors: string;
  boxOffice: string;
  language: string;
  country: string;
  director: string;
  released: string;
  website: string;
  writer: string;
}

const Details: React.FC<DetailsProps> = ({
  actors,
  boxOffice,
  language,
  country,
  director,
  released,
  website,
  writer,
}) => {
  return (
    <div>
      <h3>Details</h3>
      <table>
        <tbody>
          <tr>
            <td>Released Date</td>
            <td>{released}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{country}</td>
          </tr>
          <tr>
            <td>Languages</td>
            <td>{language}</td>
          </tr>
          <tr>
            <td>Director</td>
            <td>{director}</td>
          </tr>
          <tr>
            <td>Writer</td>
            <td>{writer}</td>
          </tr>
          <tr>
            <td>Main Actors</td>
            <td>{actors}</td>
          </tr>
          <tr>
            <td>Budget</td>
            <td>{boxOffice}</td>
          </tr>
          {website !== "N/A" && (
            <tr>
              <td>Website</td>
              <td>{website}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

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
