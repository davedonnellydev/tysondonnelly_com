"use client";
import styles from "./styles/header.module.css";
import Link from "next/link";

import Navigation from "./navigation";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} href="/">
        <img src="/TD_logo2.png" alt="TD logo" />
      </Link>
      <Navigation />
    </header>
  );
}
