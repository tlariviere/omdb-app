import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Footer />
    </div>
  );
};

export default App;
