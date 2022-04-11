import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Button, ButtonKind } from "@@components";
import { RootState } from "@@store";
import { AppLayout } from "@@views";
import { formatPageTitle } from "@@utils";
import * as styles from "./styles";

const Dashboard: NextPage = () => {
  const router = useRouter();
  const userName = useSelector((state: RootState) => state.profile.userName);
  return (
    <>
      <Head>
        <title>{formatPageTitle("Dashboard")}</title>
      </Head>
      <AppLayout>
        <div css={styles.root}>
          <div>{`Welcome back, ${userName}`}</div>
          <br />
          <Button
            title="/project"
            kind={ButtonKind.Secondary}
            onClick={() => {
              router.push("/project");
            }}
          />
        </div>
      </AppLayout>
    </>
  );
};

export default Dashboard;
