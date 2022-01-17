import React from "react";

import capitalize from "../../utils/capitalize";
import styles from "./MetaData.module.scss";

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
    <div className={styles.MetaData}>
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

export default MetaData;
