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
        <div css={styles.mainTitle}>{`Welcome back${fullname && `, ${fullname}`}`}</div>
        <br />
        <div css={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
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
