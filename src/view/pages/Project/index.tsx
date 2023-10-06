import FileSaver from "file-saver";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import { useStore } from "react-redux";
import { Api } from "@@core/api/client";
import { formatPageTitle } from "@@core/base";
import { getDocumentSecurityFeatures, getDocumentSecurityFeatureTree, getDocumentIcaoStatus } from "@@core/project";
import { ProjectFile } from "@@core/project-file";
import { Rpc } from "@@core/rpc/shared";
import { RootState } from "@@store";
import { Thunks } from "@@thunks";
import { ProjectFileDialog } from "@@view/components";
import { AppLayout } from "@@view/containers";
import { useAppDispatch, useAppSelector } from "@@view/hooks";
import { Content } from "./components/Content";
import { Scores } from "./components/Scores";
import { IcaoStatusDialog } from "./components/IcaoStatusDialog";
import { generatePdfBlob } from "./utils/generate-pdf-blob";

export interface ProjectProps {
  designQuestionsJson: string;
  securityFeaturesJson: string;
  icaoSecurityFeaturesJson: string;
  icaoSecurityFeatureCategoriesJson: string;
  icaoSecurityFeatureSubcategoriesJson: string;
}

export const Project: NextPage<ProjectProps> = (props) => {
  const store = useStore();
  const dispatch = useAppDispatch();
  const specs = useAppSelector((state) => state.project.specs);
  const score = useAppSelector((state) => state.project.score);
  const [scoresCollapsed, setScoresCollapsed] = useState(false);
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [icaoStatusDialogOpen, setIcaoStatusDialogOpen] = useState(false);

  const allDesignQuestions = useMemo(
    () => JSON.parse(props.designQuestionsJson) as Rpc.DocumentDesignQuestion[],
    [props.designQuestionsJson]
  );

  const allSecurityFeatures = useMemo(
    () => JSON.parse(props.securityFeaturesJson) as Rpc.SecurityFeature[],
    [props.securityFeaturesJson]
  );

  const allIcaoSecurityFeatures = useMemo(
    () => JSON.parse(props.icaoSecurityFeaturesJson) as Rpc.IcaoSecurityFeature[],
    [props.icaoSecurityFeaturesJson]
  );

  const allIcaoSecurityFeatureCategories = useMemo(
    () => JSON.parse(props.icaoSecurityFeatureCategoriesJson) as Rpc.IcaoSecurityFeatureCategory[],
    [props.icaoSecurityFeatureCategoriesJson]
  );

  const allIcaoSecurityFeatureSubcategories = useMemo(
    () => JSON.parse(props.icaoSecurityFeatureSubcategoriesJson) as Rpc.IcaoSecurityFeatureSubcategory[],
    [props.icaoSecurityFeatureSubcategoriesJson]
  );

  const documentSecurityFeatures = useMemo(
    () => getDocumentSecurityFeatures(specs, allSecurityFeatures),
    [specs, allSecurityFeatures]
  );

  const documentSecurityFeaturesTree = useMemo(
    () => getDocumentSecurityFeatureTree(specs, allSecurityFeatures),
    [specs, allSecurityFeatures]
  );

  const icaoStatus = useMemo(
    () =>
      getDocumentIcaoStatus(
        specs,
        allSecurityFeatures,
        allIcaoSecurityFeatures,
        allIcaoSecurityFeatureCategories,
        allIcaoSecurityFeatureSubcategories
      ),
    [
      specs,
      allSecurityFeatures,
      allIcaoSecurityFeatures,
      allIcaoSecurityFeatureCategories,
      allIcaoSecurityFeatureSubcategories,
    ]
  );

  const handleSaveProjectFile = async (password: string, name?: string): Promise<string | null> => {
    const state = store.getState() as RootState;
    const specs = state.project.specs;
    const res = await Api.projectFileEncode({ specs, password });

    if (!res.success) {
      return res.error;
    }

    const blob = new Blob([res.data.content], { type: "text/plain; charset=utf-8" });
    const filename = `${name ?? specs.title}.${ProjectFile.FILE_EXT}`;
    FileSaver.saveAs(blob, filename);
    return null;
  };

  const handleIcaoStatusClick = () => {
    setIcaoStatusDialogOpen(true);
  };

  const handleDownloadReportClick = async () => {
    const blob = await generatePdfBlob(
      specs,
      score,
      documentSecurityFeatures,
      documentSecurityFeaturesTree,
      allDesignQuestions,
      icaoStatus
    );
    FileSaver.saveAs(blob, `${specs.title}.pdf`);
  };

  useEffect(() => {
    dispatch(Thunks.projectLoad());
  }, [dispatch]);

  useEffect(() => {
    dispatch(Thunks.projectChangeSecurityFeatures(allSecurityFeatures));
  }, [dispatch, allSecurityFeatures]);

  return (
    <>
      <Head>
        <title>{formatPageTitle(specs.title)}</title>
      </Head>
      <AppLayout
        sidebar={
          <Scores
            value={score}
            collapsed={scoresCollapsed}
            icaoStatus={icaoStatus}
            onIcaoStatusClick={handleIcaoStatusClick}
            onDownloadReportClick={handleDownloadReportClick}
          />
        }
        sidebarCollapsed={scoresCollapsed}
        onToggleSidebar={(collapsed) => {
          setScoresCollapsed(collapsed);
        }}
      >
        <Content
          specs={specs}
          documentSecurityFeatureTree={documentSecurityFeaturesTree}
          designQuestions={allDesignQuestions}
          onRenameClick={(value: string) => {
            dispatch(Thunks.projectRename(value));
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
      <IcaoStatusDialog //
        open={icaoStatusDialogOpen}
        status={icaoStatus}
        onOpenChange={setIcaoStatusDialogOpen}
      />
    </>
  );
};
