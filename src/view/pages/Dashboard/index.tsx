import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import selectFiles from "select-files";
import { Api } from "@@core/api/client";
import { formatPageTitle } from "@@core/base";
import { ProjectFile } from "@@core/project-file";
import { Thunks } from "@@thunks";
import { Button, ButtonKind, Icons, ProjectFileDialog } from "@@view/components";
import { AppLayout } from "@@view/containers";
import { useAppDispatch } from "@@view/hooks";
import * as styles from "./styles";

export const Dashboard: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const [loadProjectFile, setLoadProjectFile] = useState<File | null>(null);
  const [loadProjectDialogOpen, setLoadProjectDialogOpen] = useState(false);
  const fullname = session?.user?.name;

  const handleSelectProjectFile = async () => {
    const files = await selectFiles({ accept: `.${ProjectFile.FILE_EXT}`, multiple: false });
    const file = files?.[0];

    if (!file) {
      return;
    }

    setLoadProjectFile(file);
    setLoadProjectDialogOpen(true);
  };

  const handleLoadProjectFile = async (password: string): Promise<string | null> => {
    const content = await loadProjectFile!.text();
    const res = await Api.projectFileDecode({ content, password });

    if (!res.success) {
      return res.error;
    }

    dispatch(Thunks.appLoadProject({ specs: res.data.specs, router }));
    return null;
  };

  return (
    <>
      <Head>
        <title>{formatPageTitle("Dashboard")}</title>
      </Head>
      <AppLayout mainCss={styles.root}>
        <div css={styles.mainTitle}>{`Welcome ${fullname && `${fullname}`}`}</div>
        <br />
        <div css={styles.description}>
          The eDocument Scheme for Evaluating Physical Security (eSEC) has been designed by the SIA’s Document Security
          Working Group and other experts of the ID documents sector to help governments develop secure eDocuments. It
          can be used as a self-assessment tool to evaluate the physical security of current documents, the security
          impact of additional design changes, or simply to learn and understand what is required to build a ‘secure
          eDocument’.
          <br />
          <br />
          With this version of the eSEC tool, one can create a new project or re-start from an existing one (uploading
          an .esec file). It is also possible to evaluate if the document follows some international Standards And
          Recommended Practices (SARPs) set by ICAO in its Doc 9303*, with a focus on basic security features).
          <br />
          <br />
          <i>* Part 2: Specifications for the Security of the Design, Manufacture and Issuance of MRTDs</i>
          <br />
          <br />
          <br />
          <b>
            This is a beta version, currently under test by early users. Your feedback is welcome to improve the tool.
          </b>
        </div>
        <div css={styles.buttonsContainer}>
          <Button
            title="Start from scratch"
            kind={ButtonKind.Secondary}
            icon={<Icons.BadgePlus />}
            onClick={() => dispatch(Thunks.appNewProject({ router }))}
          />
          <div css={styles.or}>or</div>
          <Button
            title="Load data from file"
            kind={ButtonKind.Secondary}
            icon={<Icons.FileUp />}
            onClick={handleSelectProjectFile}
          />
        </div>
      </AppLayout>
      <ProjectFileDialog
        open={loadProjectDialogOpen}
        mode={"load"}
        handler={handleLoadProjectFile}
        onOpenChange={setLoadProjectDialogOpen}
      />
    </>
  );
};
