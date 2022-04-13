import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@@hooks";
import * as thunks from "@@thunks";
import { formatPageTitle } from "@@utils";
import { AppLayout } from "@@view/containers";
import { Content, Scores } from "./components";
import * as styles from "./styles";

export const Project: NextPage = () => {
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.project.title);
  const status = useAppSelector((state) => state.project.status);
  const documentSpecs = useAppSelector((state) => state.project.documentSpecs);
  const documentScore = useAppSelector((state) => state.project.documentScore);

  useEffect(() => {
    dispatch(thunks.projectLoad());
  }, [dispatch]);

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
          onChangeDocumentDesignAnswer1={(value) => {
            dispatch(thunks.projectChangeDocumentDesignAnswer1(value));
          }}
          onChangeDocumentDesignAnswer2={(value) => {
            dispatch(thunks.projectChangeDocumentDesignAnswer2(value));
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
