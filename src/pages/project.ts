import { GetStaticProps } from "next";
import * as api from "@@api";
import { Project, ProjectProps } from "@@view/pages";

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
  const client = api.createClient();

  const documentDesignQuestions = await new Promise<api.DocumentDesignQuestion[]>((resolve, reject) => {
    client.getDocumentDesignQuestions({}, (err, res) => (err ? reject(err) : resolve(res.questions)));
  });

  return {
    props: {
      documentDesignQuestionsJson: JSON.stringify(documentDesignQuestions),
    },
    revalidate: 60,
  };
};

export { Project as default };
