import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import * as rpc from "@@rpc/shared";
import { formatPageTitle } from "@@core";
import * as thunks from "@@thunks";
import { AppLayout } from "@@view/containers";
import { useAppDispatch, useAppSelector } from "@@view/hooks";
import { Content, Scores } from "./components";

export interface ProjectProps {
  designQuestionsJson: string;
  securityFeaturesJson: string;
}

export const Project: NextPage<ProjectProps> = (props) => {
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.project.specs.title);
  const status = useAppSelector((state) => state.project.specs.status);
  const score = useAppSelector((state) => state.project.score);
  const documentSpecs = useAppSelector((state) => state.project.specs.document);
  const [scoresCollapsed, setScoresCollapsed] = useState(false);

  const designQuestions = useMemo(
    () => JSON.parse(props.designQuestionsJson) as rpc.DocumentDesignQuestion[],
    [props.designQuestionsJson]
  );

  const securityFeatures = useMemo(
    () => JSON.parse(props.securityFeaturesJson) as rpc.SecurityFeature[],
    [props.securityFeaturesJson]
  );

  useEffect(() => {
    dispatch(thunks.projectLoad());
  }, [dispatch]);

  useEffect(() => {
    dispatch(thunks.projectChangeSecurityFeatures(securityFeatures));
  }, [dispatch, securityFeatures]);

  return (
    <>
      <Head>
        <title>{formatPageTitle(title)}</title>
      </Head>
      <AppLayout
        sidebar={
          <Scores
            value={score}
            collapsed={scoresCollapsed}
            onDownloadReportClick={() => {
              dispatch(thunks.projectDownloadReport());
            }}
            onIcaoMissingFeaturesClick={() => {
              dispatch(thunks.projectViewMissingFeatures());
            }}
          />
        }
        sidebarCollapsed={scoresCollapsed}
        onToggleSidebar={(collapsed) => {
          setScoresCollapsed(collapsed);
        }}
      >
        <Content
          title={title}
          status={status}
          documentSpecs={documentSpecs}
          designQuestions={designQuestions}
          securityFeatures={securityFeatures}
          onRenameClick={() => {
            dispatch(thunks.projectRename());
          }}
          onExportClick={() => {
            dispatch(thunks.projectExport());
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
      </AppLayout>
    </>
  );
};
