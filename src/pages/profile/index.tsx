import { NextPage } from "next";
import Head from "next/head";
import { AppLayout } from "@@views";
import { formatPageTitle } from "@@utils";
import * as styles from "./styles";

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>{formatPageTitle("Profile")}</title>
      </Head>
      <AppLayout>
        <div css={styles.root}>Profile</div>
      </AppLayout>
    </>
  );
};

export default Profile;
