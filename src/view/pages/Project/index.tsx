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
  documentDesignQuestionsInfoJson: string;
  documentSecurityFeaturesInfoJson: string;
}

export const Project: NextPage<ProjectProps> = (props) => {
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.project.title);
  const status = useAppSelector((state) => state.project.status);
  const documentSpecs = useAppSelector((state) => state.project.documentSpecs);
  const documentScore = useAppSelector((state) => state.project.documentScore);
  const [scoresCollapsed, setScoresCollapsed] = useState(false);

  const documentDesignQuestionsInfo = useMemo(
    () => JSON.parse(props.documentDesignQuestionsInfoJson) as rpc.DocumentDesignQuestion[],
    [props.documentDesignQuestionsInfoJson]
  );

  const documentSecurityFeaturesInfo = useMemo(
    () => JSON.parse(props.documentSecurityFeaturesInfoJson) as rpc.SecurityFeature[],
    [props.documentSecurityFeaturesInfoJson]
  );

  useEffect(() => {
    dispatch(thunks.projectLoad());
  }, [dispatch]);

  useEffect(() => {
    dispatch(thunks.projectChangeDocumentSecurityFeaturesInfo(documentSecurityFeaturesInfo));
  }, [dispatch, documentSecurityFeaturesInfo]);

  return (
    <>
      <Head>
        <title>{formatPageTitle(title)}</title>
      </Head>
      <AppLayout
        sidebar={
          <Scores
            collapsed={scoresCollapsed}
            documentScore={documentScore}
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
      </AppLayout>
    </>
  );
};
