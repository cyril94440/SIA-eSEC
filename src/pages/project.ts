import { GetStaticProps } from "next";
import { Rpc } from "@@core/rpc/server";
import { Project, ProjectProps } from "@@view/pages";

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
  const client = Rpc.createDatabaseClient();

  const [designQuestions, securityFeatures] = await Promise.all([
    Rpc.getPromise<Rpc.GetDocumentDesignQuestionsResponse>((cb) => client.getDocumentDesignQuestions({}, cb)).then(
      (res) => res.questions
    ),
    Rpc.getPromise<Rpc.GetSecurityFeaturesResponse>((cb) => client.getSecurityFeatures({}, cb)).then(
      (res) => res.securityFeatures
    ),
  ]);

  return {
    props: {
      designQuestionsJson: JSON.stringify(designQuestions),
      securityFeaturesJson: JSON.stringify(securityFeatures),
    },
    revalidate: 60,
  };
};

export { Project as default };
