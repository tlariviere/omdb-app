import React from "react";

import styles from "./Ratings.module.scss";

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

export default Ratings;
