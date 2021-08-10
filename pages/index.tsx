import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/logo.png" alt="RReports" height={360} width={220} />
        <h1 className={styles.title}>Work in Progress!</h1>

        <p className={styles.description}>
          Built with ❤ by{" "}
          <a href="https://www.facebook.com/RReports.dpit">EaglesCode</a>
        </p>
      </main>

      <footer className={styles.footer}>
        
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img src="/vercel.svg"  alt="Vercel Logo"  className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}