import "normalize.css";

import { Global as EmotionGlobal } from "@emotion/react";
import { AppProps } from "next/app";
import { useContext, useEffect, useMemo, VFC } from "react";
import { Provider as ReduxProvider, useDispatch, useSelector } from "react-redux";
import { LocalStorage, LocalStorageContext } from "@@services";
import { createStore, RootState } from "@@store";
import * as styles from "@@styles";
import * as thunks from "@@thunks";

function App(props: AppProps) {
  const store = useMemo(() => createStore(), []);
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
}

const AppInner: VFC<AppProps> = (props) => {
  const dispatch = useDispatch();
  const localStorage = useContext(LocalStorageContext);
  const loaded = useSelector((state: RootState) => state.app.loaded);

  useEffect(() => {
    dispatch(thunks.appLoad({ localStorage }));
  }, [dispatch, localStorage]);

  if (!loaded) {
    return null;
  }

  return <props.Component {...props.pageProps} />;
};

export default App;
