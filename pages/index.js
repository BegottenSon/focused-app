import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import LandingPage from '../components/LandingPage.jsx';
import InitialCapture from '../components/InitialCapture.jsx';
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
  const { user, error, isLoading } = useUser();
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

      <main>
      {user ? 
       <InitialCapture 
       authUser={user}/>
       : <LandingPage />}
      
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
