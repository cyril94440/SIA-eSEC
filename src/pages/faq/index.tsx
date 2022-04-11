import { NextPage } from "next";
import Head from "next/head";
import { AppLayout } from "@@views";
import { formatPageTitle } from "@@utils";
import * as styles from "./styles";

const Faq: NextPage = () => {
  return (
    <>
      <Head>
        <title>{formatPageTitle("FAQ")}</title>
      </Head>
      <AppLayout>
        <div css={styles.root}>FAQ</div>
      </AppLayout>
    </>
  );
};

export default Faq;
