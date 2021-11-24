import '../styles/globals.css';
import '../styles/alert.css';
import { UserProvider } from '@auth0/nextjs-auth0';
import Layout from '../components/Layout.jsx';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
