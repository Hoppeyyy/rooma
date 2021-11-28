import "../styles/globals.css";
import GlobalContext from "../store/globalContext";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContext>
      <Component {...pageProps} />
    </GlobalContext>
  );
}

export default MyApp;
