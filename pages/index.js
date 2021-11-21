import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stay Focused</title>
        <meta
          name="description"
          content="Stay focused by constantly reviewing your goals"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid items-center h-screen font-thin text-primary">
        <h1 className={styles.title}>Stay Focused</h1>
        <p>
          Welcome to the app that can aid in keeping your goals and your life
          mission statement on the top of mind.
        </p>
        <p>
          Writing your goals and reading them every day can help keep you
          focused and stay on the path towards your destination.
        </p>
        <Link href="/goals">
          <a className="inline-block bg-gradient-to-br from-cool-blue to-blue-800 rounded-lg w-64 h-12 p-2 m-4 font-normal text-lg text-center justify-self-center">
            Capture My Goals
          </a>
        </Link>
      </main>

      <footer className="flex border-t border-primary justify-center">
        <a
          href="https://www.begottensounds.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          Powered by
          <span>
            <Image
              src="/bsn-full.svg"
              alt="Begotten Sounds Logo"
              width={144}
              height={96}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
