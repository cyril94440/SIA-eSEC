import { NextPage } from "next";
import Head from "next/head";
import { AppLayout } from "@@views";
import { formatPageTitle } from "@@utils";
import * as styles from "./styles";

const Notifications: NextPage = () => {
  return (
    <>
      <Head>
        <title>{formatPageTitle("Notifications")}</title>
      </Head>
      <AppLayout>
        <div css={styles.root}>Notifications</div>
      </AppLayout>
    </>
  );
};

export default Notifications;
