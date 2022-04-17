import { NextPage } from "next";
import Head from "next/head";
import { formatPageTitle } from "@@core";
import { AppLayout } from "@@view/containers";
import * as styles from "./styles";

export const Faq: NextPage = () => {
  return (
    <>
      <Head>
        <title>{formatPageTitle("FAQ")}</title>
      </Head>
      <AppLayout mainCss={styles.root}>FAQ</AppLayout>
    </>
  );
};
