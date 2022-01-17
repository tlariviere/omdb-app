import React from "react";

import styles from "./Loading.module.scss";

const Loading: React.FC = () => {
  return (
    <div className={styles.Loading}>
      <span role="status" aria-hidden="true" />
      Loading...
    </div>
  );
};

export default Loading;
