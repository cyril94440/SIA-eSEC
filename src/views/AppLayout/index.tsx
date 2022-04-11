import { FC, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icons } from "@@components";
import { LocalStorageContext } from "@@services";
import { RootState } from "@@store";
import * as thunks from "@@thunks";
import * as styles from "./styles";

export const AppLayout: FC = (props) => {
  const dispatch = useDispatch();
  const sidenavMinimized = useSelector((state: RootState) => state.app.sidenavMinimized);
  const localStorage = useContext(LocalStorageContext);
  const ToggleIcon = sidenavMinimized ? Icons.ChevronRight : Icons.ChevronLeft;
  return (
    <div css={styles.root}>
      <div css={[styles.sidenav, sidenavMinimized && styles.sidenavMinimized]}>
        <div css={styles.logo}>
          <Icons.App color="currentColor" />
        </div>
      </div>
      <div css={styles.main}>
        {props.children}
        <div
          css={styles.expandIcon}
          onClick={() => {
            dispatch(thunks.appToggleSidenav({ localStorage }));
          }}
        >
          <ToggleIcon color="currentColor" />
        </div>
      </div>
    </div>
  );
};
