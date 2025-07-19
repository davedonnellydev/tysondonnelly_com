import styles from "./styles/header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/TD_logo2.svg" alt="TD logo" />
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="/">WORK</Link>
          </li>
          <li>
            <Link href="/about">ABOUT & CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
