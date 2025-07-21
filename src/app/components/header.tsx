import styles from "./styles/header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} href="/">
        <img src="/TD_logo2.svg" alt="TD logo" />
      </Link>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link className={styles.navlink} href="/">
              WORK
            </Link>
          </li>
          <li>
            <Link className={styles.navlink} href="/about">
              ABOUT & CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
