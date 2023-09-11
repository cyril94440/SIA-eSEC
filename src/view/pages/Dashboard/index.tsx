import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { formatPageTitle } from "@@core";
import { Button, ButtonKind, Icons } from "@@view/components";
import { AppLayout } from "@@view/containers";
import { useAppSelector } from "@@view/hooks";
import * as styles from "./styles";

export const Dashboard: NextPage = () => {
  const router = useRouter();
  const userName = useAppSelector((state) => state.profile.userName);
  return (
    <>
      <Head>
        <title>{formatPageTitle("Dashboard")}</title>
      </Head>
      <AppLayout mainCss={styles.root}>
        <div css={styles.mainTitle}>{`Welcome back, ${userName}`}</div>
        <br />
        <div css={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </div>
        <div css={styles.buttonsContainer}>
          <Button
            title="Start from scratch"
            kind={ButtonKind.WithIcon}
            onClick={() => {
              router.push("/project");
            }}
            icon={<Icons.BadgePlus />}
          />
          <div css={styles.or}>or</div>
          <Button
            title="Load data from file"
            kind={ButtonKind.WithIcon}
            onClick={() => {
              alert("Implement the import file functionality");
            }}
            icon={<Icons.FileUp />}
          />
        </div>
      </AppLayout>
    </>
  );
};
