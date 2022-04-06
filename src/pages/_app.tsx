import "normalize.css";

import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@@store";
import * as styles from "@@styles";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={styles.global} />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
