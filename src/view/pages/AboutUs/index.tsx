import { NextPage } from "next";
import Head from "next/head";
import { formatPageTitle } from "@@core/base";
import { AppLayout } from "@@view/containers";
import * as styles from "./styles";

export const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>{formatPageTitle("About us")}</title>
      </Head>
      <AppLayout mainCss={styles.root}>About Us</AppLayout>
    </>
  );
};
