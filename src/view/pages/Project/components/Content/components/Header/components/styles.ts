import { css, keyframes } from "@emotion/react";
import * as styles from "@@view/styles";

export const bodyContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const formContainer = css`
  display: flex;
  flex-direction: column;
`;

export const iconContainer = css`
  width: ${styles.getSize(3)};
  height: ${styles.getSize(3)};
  cursor: pointer;
`;

export const input = css`
  padding: 0 ${styles.getSize(2)};
  background-color: ${styles.COLOR_NEUTRAL_95};
  border: none;
  border-radius: ${styles.getSize(1 / 2)};
  width: ${styles.getSize(36)};
  height: ${styles.getSize(5)};
  font-size: ${styles.FONT_MEDIUM_14_SIZE};

  &::placeholder {
    color: ${styles.COLOR_NEUTRAL_80};
    font-size: ${styles.getSize(1.5)};
    font-weight: ${styles.FONT_MEDIUM_14_SIZE};
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

export const buttonRoot = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  white-space: nowrap;
  transition: background 200ms;
  border-radius: ${styles.getSize(1 / 2)};
  cursor: pointer;
  color: ${styles.COLOR_WHITE};
  background-color: ${styles.COLOR_PRIMARY_36};

  &:hover {
    background-color: ${styles.COLOR_PRIMARY_20};
  }
  &:disabled {
    color: ${styles.COLOR_NEUTRAL_80};
    background-color: ${styles.COLOR_NEUTRAL_BLUE};
  }
`;

export const buttonRootFullWidth = css`
  display: flex;
  width: 100%;
  justify-content: center;
`;
