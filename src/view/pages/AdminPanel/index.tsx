import { NextPage } from "next";
import Head from "next/head";
import { formatPageTitle } from "@@core/base";
import { AppLayout } from "@@view/containers";
import * as styles from "./styles";
import { UserTable } from "./components/UserTable";

export const AdminPanel: NextPage = () => {
  return (
    <>
      <Head>
        <title>{formatPageTitle("Admin Panel")}</title>
      </Head>
      <AppLayout mainCss={styles.root}>
        <div css={styles.mainTitle}>Admin Panel</div>
        <UserTable />
      </AppLayout>
    </>
  );
};
