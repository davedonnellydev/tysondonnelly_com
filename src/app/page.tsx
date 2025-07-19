import styles from "./page.module.css";
import Film_Gallery from "./components/gallery";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Film_Gallery />
      </main>
      <Footer />
    </div>
  );
}
