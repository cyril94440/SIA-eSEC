import "normalize.css";

import { Global as EmotionGlobal } from "@emotion/react";
import { AppProps } from "next/app";
import { useContext, useEffect, useMemo, FC } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { useAppDispatch, useAppSelector } from "@@hooks";
import { LocalStorage, LocalStorageContext } from "@@services";
import { store } from "@@store";
import * as thunks from "@@thunks";
import * as styles from "@@view/styles";

export const App: FC<AppProps> = (props) => {
  const localStorage = useMemo(() => new LocalStorage(), []);
  return (
    <>
      <EmotionGlobal styles={styles.global} />
      <ReduxProvider store={store}>
        <LocalStorageContext.Provider value={localStorage}>
          <AppInner {...props} />
        </LocalStorageContext.Provider>
      </ReduxProvider>
    </>
  );
};

const AppInner: FC<AppProps> = (props) => {
  const dispatch = useAppDispatch();
  const localStorage = useContext(LocalStorageContext);
  const loaded = useAppSelector((state) => state.app.loaded);

  useEffect(() => {
    dispatch(thunks.appLoad({ localStorage }));
  }, [dispatch, localStorage]);

  if (!loaded) {
    return null;
  }

  return <props.Component {...props.pageProps} />;
};
