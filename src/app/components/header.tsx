import styles from "./styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/TD_logo2.svg" alt="TD logo" />
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="/">WORK</a>
          </li>
          <li>
            <a href="/about">ABOUT & CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
