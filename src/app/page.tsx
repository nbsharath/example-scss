import Image from "next/image";
import styles from "./page.module.css";
import Component1 from "./component1";

export default async function Home() {
  return (
    <main className={styles.main}>
      CSS: <Component1 />
    </main>
  );
}
