import { css, keyframes } from "@emotion/react";
import * as styles from "@@view/styles";

export const logo = css`
  width: ${styles.getSize(16)};
  margin-bottom: ${styles.getSize(8)};
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
    font-size: ${styles.getSize(1.5)};
    font-weight: ${styles.FONT_MEDIUM_14_SIZE};
  }
`;

export const label = css`
  margin-top: ${styles.getSize(3)};
  margin-bottom: ${styles.getSize(1)};
  font-size: ${styles.getSize(1.5)};
  text-align: left;
  ${styles.fontMedium14};
`;

export const inputSubmit = css`
  border: none;
  width: ${styles.getSize(36)};
  height: ${styles.getSize(5)};
  font-size: ${styles.FONT_MEDIUM_14_SIZE};
  background-color: ${styles.COLOR_PRIMARY_36};
  color: ${styles.COLOR_WHITE};
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

export const forgotPassword = css`
  ${styles.fontMedium14};
  text-decoration: none;
  text-align: right;
  cursor: pointer;
  color: ${styles.COLOR_PRIMARY_36};
  margin-top: ${styles.getSize(2)};
`;

export const signUpContainer = css`
  ${styles.fontMedium14};
  text-align: center;
  margin-top: ${styles.getSize(1)};
`;

export const signUp = css`
  text-decoration: none;
  cursor: pointer;
  color: ${styles.COLOR_PRIMARY_36};
`;
