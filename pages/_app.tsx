/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import '../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import '../node_modules/react-multi-carousel/lib/styles.css';
import '../node_modules/react-tabs/style/react-tabs.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
