import { css, keyframes } from "@emotion/react";
import * as styles from "@@view/styles";

export const logo = css`
  width: ${styles.getSize(12)};
  margin-bottom: ${styles.getSize(8)};
`;

export const title = css`
  ${styles.fontMedium32};
  font-weight: 800;
  margin-bottom: ${styles.getSize(2)};
`;

export const description = css`
  ${styles.fontMedium14};
  text-align: center;
  max-width: ${styles.getSize(32)};
`;

export const container = css`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const formContainer = css`
  display: flex;
  flex-direction: column;
`;

export const input = css`
  padding: ${styles.getSize(2)};
  background-color: ${styles.COLOR_NEUTRAL_BLUE};
  border: none;
  border-radius: ${styles.getSize(1 / 2)};
  width: ${styles.getSize(36)};
  height: ${styles.getSize(5)};
  font-size: ${styles.FONT_MEDIUM_14_SIZE};

  &::placeholder {
    color: ${styles.COLOR_NEUTRAL_80};
  }

  &:disabled {
    cursor: not-allowed;
    font-style: italic;
  }
`;

export const label = css`
  margin-top: ${styles.getSize(3)};
  margin-bottom: ${styles.getSize(1)};
  font-size: ${styles.getSize(1.5)};
  text-align: left;
  font-size: ${styles.FONT_MEDIUM_14_SIZE};
`;

export const inputSubmit = css`
  border: none;
  width: ${styles.getSize(36)};
  height: ${styles.getSize(5)};
  font-size: ${styles.FONT_MEDIUM_14_SIZE};
`;

export const errorMsg = css`
  color: ${styles.COLOR_RED};
  font-size: ${styles.FONT_REGULAR_12_SIZE};
  margin-top: ${styles.getSize(1 / 2)};
`;

const spin = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
`;

export const spinnerContainer = css`
  position: relative;
  margin-top: ${styles.getSize(8)};
  width: fit-content;
  height: fit-content;
`;

export const spinner = css`
  position: absolute; 
  top: 50%;
  left: 50%;
  border: 4px solid ${styles.COLOR_PRIMARY_90};
  border-radius: 50%;
  border-top: 4px solid transparent;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite;
}`;

export const successIcon = css`
  color: ${styles.COLOR_WHITE};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${styles.getSize(3.5)};
  height: ${styles.getSize(3.5)};
`;
