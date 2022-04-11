import { NextPage } from "next";
import Head from "next/head";
import { AppLayout } from "@@views";
import { formatPageTitle } from "@@utils";
import * as styles from "./styles";

const Subscription: NextPage = () => {
  return (
    <>
      <Head>
        <title>{formatPageTitle("Subscription")}</title>
      </Head>
      <AppLayout>
        <div css={styles.root}>Subscription</div>
      </AppLayout>
    </>
  );
};

export default Subscription;
