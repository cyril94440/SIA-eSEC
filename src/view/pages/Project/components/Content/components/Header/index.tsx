import { FC } from "react";
import { Button, ButtonKind, Icons } from "@@view/components";
import * as styles from "./styles";
import { RenameDialog } from "./components/RenameDialog";

export interface HeaderProps {
  title: string;
  onRenameClick: (title: string) => void;
  onEncryptionInfoClick: () => void;
  onSaveClick: () => void;
}

export const Header: FC<HeaderProps> = (props) => {
  return (
    <>
      <div css={styles.root}>
        <div css={styles.title}>
          <div css={styles.titleBody}>{props.title}</div>
          <RenameDialog actualTitle={props.title} handleRename={props.onRenameClick} />
        </div>
        <div css={styles.encryptionInfo}>
          <div css={styles.encryptionInfoIcon}>
            <Icons.Lock />
          </div>
          <div css={styles.encryptionInfoText}>
            The data are end-to-end encrypted, you and your collaborators are the only ones who can access the data.
          </div>
          <Button title="More info" kind={ButtonKind.Info} onClick={props.onEncryptionInfoClick} />
        </div>
        <div css={styles.exportButton}>
          <Button
            kind={ButtonKind.Secondary}
            icon={<Icons.FileUp />}
            title="Save data for later"
            onClick={props.onSaveClick}
          />
        </div>
      </div>
    </>
  );
};
