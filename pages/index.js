import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Who You Are</title>
        <meta
          name="description"
          content="Stay focused by constantly reviewing your goals"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" font-thin text-primary">
        <h1 className={styles.title}>Stay Focused</h1>
        <Link href="/goals">My Goals</Link>
      </main>

      <footer className=' flex border-t border-primary justify-center'>
        <a
          href="https://www.begottensounds.com"
          target="_blank"
          rel="noopener noreferrer"
          className='flex flex-col items-center'
        >
          Powered by
          <span>
            <Image src="/bsn-full.svg" alt="Begotten Sounds Logo" width={144} height={96} />
          </span>
        </a>
      </footer>
    </div>
  );
}
