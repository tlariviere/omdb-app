import React from "react";

import styles from "./MovieDetails.module.scss";

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

const MovieDetails: React.FC<DetailsProps> = ({
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
    <div className={styles.MovieDetails}>
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

export default MovieDetails;
