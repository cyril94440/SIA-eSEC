import { GetStaticProps } from "next";
import * as rpc from "@@rpc/server";
import { Project, ProjectProps } from "@@view/pages";

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
  const client = rpc.createDatabaseClient();

  const [documentDesignQuestionsInfo, documentSecurityFeaturesInfo] = await Promise.all([
    rpc
      .getPromise<rpc.GetDocumentDesignQuestionsResponse>((cb) => client.getDocumentDesignQuestions({}, cb))
      .then((res) => res.questions),
    rpc
      .getPromise<rpc.GetSecurityFeaturesResponse>((cb) => client.getSecurityFeatures({}, cb))
      .then((res) => res.securityFeatures),
  ]);

  return {
    props: {
      documentDesignQuestionsInfoJson: JSON.stringify(documentDesignQuestionsInfo),
      documentSecurityFeaturesInfoJson: JSON.stringify(documentSecurityFeaturesInfo),
    },
    revalidate: 60,
  };
};

export { Project as default };
