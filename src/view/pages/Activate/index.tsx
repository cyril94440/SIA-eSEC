import { NextPage } from "next";
import Head from "next/head";
import { formatPageTitle } from "@@core";
import * as styles from "./styles";

export const Activate: NextPage = () => {
  return (
    <>
      <Head>
        <title>{formatPageTitle("Activate your account")}</title>
      </Head>
      <div>Activate your account</div>
    </>
  );
};
