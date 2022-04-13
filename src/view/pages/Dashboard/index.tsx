import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { AppState } from "@@store";
import { formatPageTitle } from "@@utils";
import { Button, ButtonKind } from "@@view/components";
import { AppLayout } from "@@view/containers";
import * as styles from "./styles";

export const Dashboard: NextPage = () => {
  const router = useRouter();
  const userName = useSelector((state: AppState) => state.profile.userName);
  return (
    <>
      <Head>
        <title>{formatPageTitle("Dashboard")}</title>
      </Head>
      <AppLayout mainCss={styles.root}>
        <div>{`Welcome back, ${userName}`}</div>
        <br />
        <Button
          title="/project"
          kind={ButtonKind.Secondary}
          onClick={() => {
            router.push("/project");
          }}
        />
      </AppLayout>
    </>
  );
};
