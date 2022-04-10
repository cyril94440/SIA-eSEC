import { NextPage } from "next";
import Head from "next/head";
import { useSelector } from "react-redux";
import { RootState } from "@@store";
import { AppLayout } from "@@views";
import { formatPageTitle } from "@@utils";
import * as styles from "./styles";

const Dashboard: NextPage = () => {
  const userName = useSelector((state: RootState) => state.profile.userName);
  return (
    <>
      <Head>
        <title>{formatPageTitle("Dashboard")}</title>
      </Head>
      <AppLayout>
        <div css={styles.root}>{`Welcome back, ${userName}`}</div>
      </AppLayout>
    </>
  );
};

export default Dashboard;
