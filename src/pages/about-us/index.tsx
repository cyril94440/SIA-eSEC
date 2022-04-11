import { NextPage } from "next";
import Head from "next/head";
import { AppLayout } from "@@views";
import { formatPageTitle } from "@@utils";
import * as styles from "./styles";

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>{formatPageTitle("About us")}</title>
      </Head>
      <AppLayout>
        <div css={styles.root}>About Us</div>
      </AppLayout>
    </>
  );
};

export default AboutUs;
