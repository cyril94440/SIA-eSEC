import { useRouter } from "next/router";
import { FC, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icons } from "@@components";
import * as routes from "@@routes";
import { LocalStorageContext } from "@@services";
import { RootState } from "@@store";
import * as thunks from "@@thunks";
import { Main, Sidenav, SidenavHeader, SidenavItem, SidenavSection, SidenavToggle } from "./components";
import * as styles from "./styles";

export const AppLayout: FC = (props) => {
  const dispatch = useDispatch();
  const sidenavMinimized = useSelector((state: RootState) => state.app.sidenavMinimized);
  const localStorage = useContext(LocalStorageContext);
  const router = useRouter();
  return (
    <div css={styles.root}>
      <Sidenav minimized={sidenavMinimized}>
        <SidenavHeader minimized={sidenavMinimized} />
        <SidenavSection>
          <SidenavItem
            Icon={Icons.Dashboard}
            title="Dashboard"
            minimized={sidenavMinimized}
            link={{ href: routes.DASHBOARD }}
            active={router.pathname === routes.DASHBOARD}
          />
          <SidenavItem
            Icon={Icons.Group}
            title="About us"
            minimized={sidenavMinimized}
            link={{ href: routes.ABOUT_US }}
            active={router.pathname === routes.ABOUT_US}
          />
          <SidenavItem
            Icon={Icons.Faq}
            title="FAQ"
            minimized={sidenavMinimized}
            link={{ href: routes.FAQ }}
            active={router.pathname === routes.FAQ}
          />
        </SidenavSection>
        <SidenavSection>
          <SidenavItem
            Icon={Icons.Notifications}
            title="Notifications"
            minimized={sidenavMinimized}
            link={{ href: routes.NOTIFICATIONS }}
            active={router.pathname === routes.NOTIFICATIONS}
          />
          <SidenavItem
            Icon={Icons.Person}
            title="My profile"
            minimized={sidenavMinimized}
            link={{ href: routes.PROFILE }}
            active={router.pathname === routes.PROFILE}
          />
          <SidenavItem
            Icon={Icons.ChecksGrid}
            title="My subscription"
            minimized={sidenavMinimized}
            link={{ href: routes.SUBSCRIPTION }}
            active={router.pathname === routes.SUBSCRIPTION}
          />
        </SidenavSection>
        <SidenavSection>
          <SidenavItem
            Icon={Icons.Logout}
            title="Log out"
            minimized={sidenavMinimized}
            onClick={() => {
              dispatch(thunks.appLogout());
            }}
          />
        </SidenavSection>
        <SidenavToggle
          minimized={sidenavMinimized}
          onClick={() => {
            dispatch(thunks.appToggleSidenav({ localStorage }));
          }}
        />
      </Sidenav>
      <Main>{props.children}</Main>
    </div>
  );
};
