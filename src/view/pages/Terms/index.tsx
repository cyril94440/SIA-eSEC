import React from "react";
import * as styles from "./styles";
import Head from "next/head";
import { formatPageTitle } from "@@core/base";
import { Icons } from "@@view/components";
import { useSession } from "next-auth/react";
import { AppLayout } from "@@view/containers";
export const Terms = () => {
  const { data: session } = useSession();

  console.log(session);
  const Content = () => (
    <>
      <Head>
        <title>{formatPageTitle("Terms and Conditions")}</title>
      </Head>
      {!session && (
        <div css={styles.backButtonContainer}>
          <div css={styles.backIcon}>
            <Icons.ChevronLeft />
          </div>
          <button
            css={styles.backButton}
            onClick={() => {
              window.history.back();
            }}
          >
            Retour
          </button>
        </div>
      )}
      <div css={styles.container}>
        <div css={styles.logo}>
          <Icons.App />
        </div>
        <div css={styles.title}>Terms and Conditions</div>
        <div css={styles.paragraphs}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} css={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return !session ? (
    <Content />
  ) : (
    <AppLayout mainCss={styles.root}>
      <Content />
    </AppLayout>
  );
};
