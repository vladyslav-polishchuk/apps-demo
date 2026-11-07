import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Juniper Café | Website Concept",
  description: "A sample website for a fictional neighborhood café.",
};

const menu = [
  { name: "Flat white", description: "House espresso with silky steamed milk." },
  { name: "Cardamom bun", description: "A soft, spiced bun baked each morning." },
  { name: "Seasonal toast", description: "Sourdough with whipped ricotta and pear." },
];

export default function CafePreviewPage() {
  return (
    <main className={styles.cafe}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Fictional café · Website concept</p>
          <h1>Juniper Café</h1>
          <p className={styles.intro}>
            Slow mornings, fresh pastries, and a good cup of coffee.
          </p>
          <a className={styles.menuLink} href="#menu">
            See the menu
          </a>
        </div>
      </header>

      <div className={styles.details}>
        <section id="menu">
          <h2>House favorites</h2>
          <dl className={styles.menu}>
            {menu.map(({ name, description }) => (
              <div key={name}>
                <dt>{name}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section>
          <h2>Hours</h2>
          <p>
            Mon–Fri · 8 am–4 pm<br />
            Sat–Sun · 9 am–3 pm
          </p>
        </section>
      </div>
    </main>
  );
}
