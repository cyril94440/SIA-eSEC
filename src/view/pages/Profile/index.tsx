import { NextPage } from "next";
import Head from "next/head";
import { formatPageTitle } from "@@core/base";
import { AppLayout } from "@@view/containers";
import * as styles from "./styles";

export const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>{formatPageTitle("Profile")}</title>
      </Head>
      <AppLayout mainCss={styles.root}>Profile</AppLayout>
    </>
  );
};
