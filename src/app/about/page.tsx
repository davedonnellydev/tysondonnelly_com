import mainstyles from "../page.module.css";
import styles from "./about.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImdb, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className={mainstyles.page}>
      <Header />
      <main className={mainstyles.main}>
        <section className={styles.about}>
          <img
            src="./headshot_BW.jpg"
            className={styles.headshot}
            alt="A black and white photo of Tyson Donnelly smiling to camera"
          />
          <div className={styles.aboutPara}>
            <h1>About</h1>
            <p>
              I&apos;m a VFX and Compositing Supervisor based in Sydney.
              I&apos;m experienced in both client and vendor side VFX show
              delivery.
            </p>
          </div>
        </section>
        <section className={styles.contact}>
          <h2>Contact</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faImdb} className={styles.contactIcons} />
              <Link href="http://www.imdb.com/name/nm4286541/" target="_blank">
                imdb.com
              </Link>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLinkedin}
                className={styles.contactIcons}
              />
              <Link
                href="https://www.linkedin.com/in/tyson-donnelly-66aa3a35"
                target="_blank"
              >
                linkedin.com
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faAt} className={styles.contactIcons} />
              <Link href="mailto:tysondonnelly@gmail.com" target="_blank">
                tysondonnelly@gmail.com
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
