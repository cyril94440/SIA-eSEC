import { Faq, FaqProps } from "@@view/pages";
import { FAQ, getFaqData } from "lib/utils/get-faq-data";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps<FaqProps> = () => {
  const faqData: FAQ[] = getFaqData();

  return {
    props: {
      faqData,
    },
  };
};

export { Faq as default };
