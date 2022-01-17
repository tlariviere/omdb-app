import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "../components/Header";
import Movie from "./Movie";
import Footer from "../components/Footer";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header />

        <main>
          <Routes>
            <Route path="/movie/:imdbId" element={<Movie />} />
            <Route path="/search" element={<div />} />
            <Route path="*" element={<Navigate to="/search" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
