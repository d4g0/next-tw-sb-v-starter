import "../styles/globals.css";
import "../styles/fonts.css";


function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Component { ...pageProps } />
  );
}

export default MyApp;
