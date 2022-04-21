import { GetStaticProps } from "next";
import * as api from "@@api/server";
import { Project, ProjectProps } from "@@view/pages";

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
  const client = api.createClient();

  const [documentDesignQuestionsInfo, documentSecurityFeaturesInfo] = await Promise.all([
    api
      .getPromise<api.GetDocumentDesignQuestionsResponse>((cb) => client.getDocumentDesignQuestions({}, cb))
      .then((res) => res.questions),
    api
      .getPromise<api.GetSecurityFeaturesResponse>((cb) => client.getSecurityFeatures({}, cb))
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
