import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import * as rpc from "@@rpc/shared";
import { formatPageTitle } from "@@core";
import { Thunks } from "@@thunks";
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
    dispatch(Thunks.projectLoad());
  }, [dispatch]);

  useEffect(() => {
    dispatch(Thunks.projectChangeSecurityFeatures(securityFeatures));
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
              dispatch(Thunks.projectDownloadReport());
            }}
            onIcaoMissingFeaturesClick={() => {
              dispatch(Thunks.projectViewMissingFeatures());
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
            dispatch(Thunks.projectRename());
          }}
          onEncryptionInfoClick={() => {
            dispatch(Thunks.projectViewEncryptionInfo());
          }}
          onSaveClick={() => {
            dispatch(Thunks.projectSave());
          }}
          onChangeDocumentType={(value) => {
            dispatch(Thunks.projectChangeDocumentType(value));
          }}
          onChangeDocumentMaterial={(value) => {
            dispatch(Thunks.projectChangeDocumentMaterial(value));
          }}
          onChangeDocumentStandardCompliance={(value) => {
            dispatch(Thunks.projectChangeDocumentStandardCompliance(value));
          }}
          onChangeDocumentScoreTarget={(value) => {
            dispatch(Thunks.projectChangeDocumentScoreTarget(value));
          }}
          onChangeDocumentDesignAnswer={(value) => {
            dispatch(Thunks.projectChangeDocumentDesignAnswer(value));
          }}
          onChangeDocumentSecurityFeatures={(value) => {
            dispatch(Thunks.projectChangeDocumentSecurityFeatures(value));
          }}
        />
      </AppLayout>
    </>
  );
};
