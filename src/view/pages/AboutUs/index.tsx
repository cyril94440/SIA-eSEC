import { NextPage } from "next";
import Head from "next/head";
import { AppLayout } from "@@view/containers";
import { formatPageTitle } from "@@utils";
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
