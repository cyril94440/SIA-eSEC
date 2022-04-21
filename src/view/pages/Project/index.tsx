import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useMemo } from "react";
import * as api from "@@api/common";
import { formatPageTitle } from "@@core";
import * as thunks from "@@thunks";
import { AppLayout } from "@@view/containers";
import { useAppDispatch, useAppSelector } from "@@view/hooks";
import { Content, Scores } from "./components";
import * as styles from "./styles";

export interface ProjectProps {
  documentDesignQuestionsInfoJson: string;
  documentSecurityFeaturesInfoJson: string;
}

export const Project: NextPage<ProjectProps> = (props) => {
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.project.title);
  const status = useAppSelector((state) => state.project.status);
  const documentSpecs = useAppSelector((state) => state.project.documentSpecs);
  const documentScore = useAppSelector((state) => state.project.documentScore);

  const documentDesignQuestionsInfo = useMemo(
    () => JSON.parse(props.documentDesignQuestionsInfoJson) as api.DocumentDesignQuestion[],
    [props.documentDesignQuestionsInfoJson]
  );

  const documentSecurityFeaturesInfo = useMemo(
    () => JSON.parse(props.documentSecurityFeaturesInfoJson) as api.SecurityFeature[],
    [props.documentSecurityFeaturesInfoJson]
  );

  // console.log("documentDesignQuestionsInfo", documentDesignQuestionsInfo);
  // console.log("documentSecurityFeaturesInfo", documentSecurityFeaturesInfo);

  useEffect(() => {
    dispatch(thunks.projectLoad());
  }, [dispatch]);

  useEffect(() => {
    dispatch(thunks.projectChangeDocumentDesignQuestions(documentDesignQuestionsInfo));
  }, [dispatch, documentDesignQuestionsInfo]);

  return (
    <>
      <Head>
        <title>{formatPageTitle(title)}</title>
      </Head>
      <AppLayout mainCss={styles.root}>
        <Content
          title={title}
          status={status}
          documentSpecs={documentSpecs}
          documentDesignQuestionsInfo={documentDesignQuestionsInfo}
          documentSecurityFeaturesInfo={documentSecurityFeaturesInfo}
          onRenameClick={() => {
            dispatch(thunks.projectRename());
          }}
          onEncryptionInfoClick={() => {
            dispatch(thunks.projectViewEncryptionInfo());
          }}
          onChangeDocumentType={(value) => {
            dispatch(thunks.projectChangeDocumentType(value));
          }}
          onChangeDocumentMaterial={(value) => {
            dispatch(thunks.projectChangeDocumentMaterial(value));
          }}
          onChangeDocumentStandardCompliance={(value) => {
            dispatch(thunks.projectChangeDocumentStandardCompliance(value));
          }}
          onChangeDocumentScoreTarget={(value) => {
            dispatch(thunks.projectChangeDocumentScoreTarget(value));
          }}
          onChangeDocumentDesignAnswer={(value) => {
            dispatch(thunks.projectChangeDocumentDesignAnswer(value));
          }}
          onChangeDocumentSecurityFeatures={(value) => {
            dispatch(thunks.projectChangeDocumentSecurityFeatures(value));
          }}
        />
        <Scores
          documentScore={documentScore}
          onDownloadReportClick={() => {
            dispatch(thunks.projectDownloadReport());
          }}
          onIcaoMissingFeaturesClick={() => {
            dispatch(thunks.projectViewMissingFeatures());
          }}
        />
      </AppLayout>
    </>
  );
};