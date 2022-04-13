import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  margin-bottom: ${styles.getSize(8)};
`;

export const title = css`
  margin-bottom: ${styles.getSize(1)};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${styles.getSize(2)};
`;

export const titleBody = css`
  ${styles.fontMedium40};
`;

export const titleEditIcon = css`
  width: ${styles.getSize(2)};
  height: ${styles.getSize(2)};
  cursor: pointer;
  user-select: none;
`;

export const encryptionInfo = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${styles.getSize(1)};
  padding: ${styles.getSize(1)} 0;
`;

export const encryptionInfoIcon = css`
  width: ${styles.getSize(2)};
`;

export const encryptionInfoText = css`
  ${styles.fontRegular12};
`;
