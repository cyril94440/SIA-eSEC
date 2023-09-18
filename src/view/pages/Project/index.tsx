import FileSaver from "file-saver";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import { useStore } from "react-redux";
import { Api } from "@@core/api/client";
import { formatPageTitle } from "@@core/base";
import { ProjectFile } from "@@core/project-file";
import { Rpc } from "@@core/rpc/shared";
import { RootState } from "@@store";
import { Thunks } from "@@thunks";
import { ProjectFileDialog } from "@@view/components";
import { AppLayout } from "@@view/containers";
import { useAppDispatch, useAppSelector } from "@@view/hooks";
import { Content, Scores } from "./components";

export interface ProjectProps {
  designQuestionsJson: string;
  securityFeaturesJson: string;
}

export const Project: NextPage<ProjectProps> = (props) => {
  const store = useStore();
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.project.specs.title);
  const status = useAppSelector((state) => state.project.specs.status);
  const score = useAppSelector((state) => state.project.score);
  const documentSpecs = useAppSelector((state) => state.project.specs.document);
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [scoresCollapsed, setScoresCollapsed] = useState(false);

  const designQuestions = useMemo(
    () => JSON.parse(props.designQuestionsJson) as Rpc.DocumentDesignQuestion[],
    [props.designQuestionsJson]
  );

  const securityFeatures = useMemo(
    () => JSON.parse(props.securityFeaturesJson) as Rpc.SecurityFeature[],
    [props.securityFeaturesJson]
  );

  const handleSaveProjectFile = async (password: string): Promise<string | null> => {
    const state = store.getState() as RootState;
    const specs = state.project.specs;
    const res = await Api.projectFileEncode({ specs, password });

    if (!res.success) {
      return res.error;
    }

    const blob = new Blob([res.data.content], { type: "text/plain; charset=utf-8" });
    const filename = `${specs.title}.${ProjectFile.FILE_EXT}`;
    FileSaver.saveAs(blob, filename);
    return null;
  };

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
            // TODO:
          }}
          onSaveClick={() => {
            setSaveDialogOpen(true);
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
      <ProjectFileDialog
        open={saveDialogOpen}
        mode={"save"}
        handler={handleSaveProjectFile}
        onOpenChange={setSaveDialogOpen}
      />
    </>
  );
};
