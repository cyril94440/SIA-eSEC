import { NextPage } from "next";
import Head from "next/head";
import { formatPageTitle } from "@@core/base";
import { AppLayout } from "@@view/containers";
import * as styles from "./styles";
import { Collapsible } from "view/components/Collapsible";
import ReactMarkdown from "react-markdown";
import { FAQ } from "lib/utils/get-faq-data";

export interface FaqProps {
  faqData: FAQ[];
}

export const Faq: NextPage<FaqProps> = (props) => {
  return (
    <>
      <Head>
        <title>{formatPageTitle("FAQ")}</title>
      </Head>
      <AppLayout mainCss={styles.root}>
        <div css={styles.pageTitle}>Frequently Asked Questions</div>
        <div css={styles.pageDescription}>
          {
            "Explore our FAQ page for clear answers to common questions on a variety of topics. Designed for anyone seeking clarity, our explanations are both accurate and straightforward. Dive in to satisfy your curiosity!"
          }
        </div>
        {props.faqData.map((category, i) => (
          <div key={i}>
            <div css={styles.categoryTitle}>{category.category}</div>
            {category.questions.map((q, j) => (
              <div key={j}>
                <Collapsible key={j} title={q.question}>
                  <ReactMarkdown>{q.answer}</ReactMarkdown>
                </Collapsible>
              </div>
            ))}
          </div>
        ))}
      </AppLayout>
    </>
  );
};
