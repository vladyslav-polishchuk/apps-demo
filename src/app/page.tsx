import Link from "next/link";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <main className={styles.home}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Website previews</p>
        <h1>Apps Demo</h1>
        <p className={styles.description}>
          A home for working website concepts tailored to small businesses.
        </p>
        <Link className={styles.link} href="/preview/juniper-cafe">
          Open the sample café preview <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
