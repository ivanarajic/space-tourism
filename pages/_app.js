import '../styles/globals.css';
import { textFont } from '../utils/fonts';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${textFont.className}  overflow-x-hidden `}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;
