import "normalize.css";

import { Global as EmotionGlobal } from "@emotion/react";
import { AppProps } from "next/app";
import { useEffect, FC } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@@store";
import * as thunks from "@@thunks";
import { useAppDispatch, useAppSelector } from "@@view/hooks";
import * as styles from "@@view/styles";

export const App: FC<AppProps> = (props) => {
  return (
    <>
      <EmotionGlobal styles={styles.global} />
      <ReduxProvider store={store}>
        <AppInner {...props} />
      </ReduxProvider>
    </>
  );
};

const AppInner: FC<AppProps> = (props) => {
  const dispatch = useAppDispatch();
  const loaded = useAppSelector((state) => state.app.loaded);

  useEffect(() => {
    dispatch(thunks.appLoad());
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return <props.Component {...props.pageProps} />;
};
