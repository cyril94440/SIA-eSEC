import { SerializedStyles } from "@emotion/utils";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { Routes } from "@@core/routes";
import { Thunks } from "@@thunks";
import { Icons } from "@@view/components";
import { useAppDispatch, useAppSelector } from "@@view/hooks";
import { Main, Sidebar, Sidenav, SidenavHeader, SidenavItem, SidenavSection, SideToggle } from "./components";
import * as styles from "./styles";
import { useSession } from "next-auth/react";

export interface AppLayoutProps {
  mainCss?: SerializedStyles;
  children?: ReactNode;
  sidebar?: ReactNode;
  sidebarCollapsed?: boolean;
  onToggleSidebar?: (collapsed: boolean) => void;
}

export const AppLayout: FC<AppLayoutProps> = (props) => {
  const dispatch = useAppDispatch();
  const sidenavMinimized = useAppSelector((state) => state.app.sidenavMinimized);
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div css={styles.root}>
      <Sidenav minimized={sidenavMinimized}>
        <SidenavHeader minimized={sidenavMinimized} />
        <SidenavSection>
          <SidenavItem
            Icon={Icons.Dashboard}
            title="Dashboard"
            minimized={sidenavMinimized}
            link={{ href: Routes.DASHBOARD }}
            active={router.pathname === Routes.DASHBOARD}
          />
          <SidenavItem
            Icon={Icons.Group}
            title="About us"
            minimized={sidenavMinimized}
            link={{ href: Routes.ABOUT_US }}
            active={router.pathname === Routes.ABOUT_US}
          />
          <SidenavItem
            Icon={Icons.Faq}
            title="FAQ"
            minimized={sidenavMinimized}
            link={{ href: Routes.FAQ }}
            active={router.pathname === Routes.FAQ}
          />
          <SidenavItem
            Icon={Icons.Terms}
            title="Terms"
            minimized={sidenavMinimized}
            link={{ href: Routes.TERMS }}
            active={router.pathname === Routes.TERMS}
          />
        </SidenavSection>
        {/* <SidenavSection>
          <SidenavItem
            Icon={Icons.Notifications}
            title="Notifications"
            minimized={sidenavMinimized}
            link={{ href: Routes.NOTIFICATIONS }}
            active={router.pathname === Routes.NOTIFICATIONS}
          />
          <SidenavItem
            Icon={Icons.Person}
            title="My profile"
            minimized={sidenavMinimized}
            link={{ href: Routes.PROFILE }}
            active={router.pathname === Routes.PROFILE}
          />
          <SidenavItem
            Icon={Icons.ChecksGrid}
            title="My subscription"
            minimized={sidenavMinimized}
            link={{ href: Routes.SUBSCRIPTION }}
            active={router.pathname === Routes.SUBSCRIPTION}
          />
        </SidenavSection> */}
        <SidenavSection>
          {session?.user?.role === "ADMIN" && (
            <SidenavItem
              Icon={Icons.Lock}
              title="Admin panel"
              minimized={sidenavMinimized}
              link={{ href: Routes.ADMIN_PANEL }}
              active={router.pathname === Routes.ADMIN_PANEL}
            />
          )}
          <SidenavItem
            Icon={Icons.Logout}
            title="Log out"
            minimized={sidenavMinimized}
            onClick={() => {
              dispatch(Thunks.appLogout());
            }}
          />
        </SidenavSection>
        <SideToggle
          placement="left"
          minimized={sidenavMinimized}
          onClick={() => {
            dispatch(Thunks.appToggleSidenav());
          }}
        />
      </Sidenav>
      <Main css={props.mainCss} withSidebar={!!props.sidebar} sideBarCollapsed={props.sidebarCollapsed}>
        {props.children}
      </Main>
      {props.sidebar && (
        <Sidebar collapsed={props.sidebarCollapsed ?? false}>
          {props.sidebar}
          <SideToggle
            placement="right"
            minimized={props.sidebarCollapsed ?? false}
            onClick={() => {
              props.onToggleSidebar?.(!(props.sidebarCollapsed ?? false));
            }}
          />
        </Sidebar>
      )}
    </div>
  );
};
