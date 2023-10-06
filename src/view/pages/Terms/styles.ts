import { css, keyframes } from "@emotion/react";
import * as styles from "@@view/styles";

export const root = css`
  padding: ${styles.getSize(4)};
`;

export const container = css`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const logo = css`
  width: ${styles.getSize(16)};
  margin-bottom: ${styles.getSize(8)};
  color: ${styles.COLOR_PRIMARY_36};
`;

export const title = css`
  ${styles.fontMedium32};
  font-weight: 800;
  margin-bottom: ${styles.getSize(2)};
`;

export const backButton = css`
  background-color: transparent;
  border: none;
  color: ${styles.COLOR_PRIMARY_36};
  cursor: pointer;
`;

export const backButtonContainer = css`
  display: flex;
  align-items: center;
  position: absolute;
  top: ${styles.getSize(4)};
  left: ${styles.getSize(4)};
  cursor: pointer;
  padding: ${styles.getSize(1)} ${styles.getSize(2)};
  border-radius: ${styles.getSize(1 / 2)};

  &:hover {
    background: ${styles.COLOR_NEUTRAL_90};
  }
`;

export const backIcon = css`
  width: ${styles.getSize(2)};
  height: ${styles.getSize(2)};
  margin-right: ${styles.getSize(1)};
`;

export const paragraphs = css`
  max-width: 60%;
`;

export const paragraph = css`
  margin-bottom: ${styles.getSize(2)};
`;
