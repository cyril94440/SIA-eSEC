import { NextPage } from "next";
import Head from "next/head";
import { formatPageTitle } from "@@utils";
import { AppLayout } from "@@view/containers";
import * as styles from "./styles";

export const Notifications: NextPage = () => {
  return (
    <>
      <Head>
        <title>{formatPageTitle("Notifications")}</title>
      </Head>
      <AppLayout mainCss={styles.root}>Notifications</AppLayout>
    </>
  );
};
