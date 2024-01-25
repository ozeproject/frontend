// Import necessary modules
import { createHashHistory } from 'history';
import { useRouter } from 'next/router';

// Create the hash history instance
const history = createHashHistory();

// Use the history instance in your Next.js app
const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  // Set the history instance for Next.js router
  if (process.browser) {
    router.push = (...args) => history.push(...args);
    router.replace = (...args) => history.replace(...args);
    router.back = () => history.goBack();
  }

  return <Component {...pageProps} />;
};

export default MyApp;
