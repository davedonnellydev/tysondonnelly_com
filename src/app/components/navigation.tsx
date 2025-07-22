import styles from "./styles/navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link
            className={`${styles.navlink} ${
              pathname === "/" ? styles.activeLink : ""
            }`}
            href="/"
          >
            WORK
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.navlink} ${
              pathname === "/about" ? styles.activeLink : ""
            }`}
            href="/about"
          >
            ABOUT & CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
