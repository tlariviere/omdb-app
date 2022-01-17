import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <nav>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
