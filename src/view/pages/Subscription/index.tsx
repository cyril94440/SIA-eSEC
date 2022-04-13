import { NextPage } from "next";
import Head from "next/head";
import { formatPageTitle } from "@@utils";
import { AppLayout } from "@@view/containers";
import * as styles from "./styles";

export const Subscription: NextPage = () => {
  return (
    <>
      <Head>
        <title>{formatPageTitle("Subscription")}</title>
      </Head>
      <AppLayout mainCss={styles.root}>Subscription</AppLayout>
    </>
  );
};
