import React from "react";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

import styles from "../Header/styles.module.css";

function Header() {
  const headerStyle = {
    color: "white", // Set text color to white
  };

  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link href="/" className={styles.logo} style={headerStyle}>
          <FaPlayCircle /> NETFİLMS
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="/" style={headerStyle}>
            Movies
          </Link>
          <Link href="/" style={headerStyle}>
            Series
          </Link>
          <Link href="/" style={headerStyle}>
            Kids
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
