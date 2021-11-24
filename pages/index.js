import Head from 'next/head';
import Image from 'next/image';
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
    </div>
  );
}
