import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header />

        <main>
          <Routes>
            <Route path="/movie/:imdbId" element={<div />} />
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
