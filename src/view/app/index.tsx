import "normalize.css";

import { Global as EmotionGlobal } from "@emotion/react";
import { AppProps } from "next/app";
import { useEffect, FC } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@@store";
import { Thunks } from "@@thunks";
import { useAppDispatch, useAppSelector } from "@@view/hooks";
import * as styles from "@@view/styles";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export const App: FC<AppProps> = (props) => {
  return (
    <>
      <SessionProvider session={props.pageProps.session}>
        <Toaster position="top-right" reverseOrder={false} />
        <EmotionGlobal styles={styles.global} />
        <ReduxProvider store={store}>
          <AppInner {...props} />
        </ReduxProvider>
      </SessionProvider>
    </>
  );
};

const AppInner: FC<AppProps> = (props) => {
  const dispatch = useAppDispatch();
  const loaded = useAppSelector((state) => state.app.loaded);

  useEffect(() => {
    dispatch(Thunks.appLoad());
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return <props.Component {...props.pageProps} />;
};
