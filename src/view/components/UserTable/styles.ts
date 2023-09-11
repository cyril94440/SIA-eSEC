import { css } from "@emotion/react";
import * as styles from "@@view/styles";

export const table = css`
  width: 100%;
  border-collapse: collapse;
`;

export const tableHeader = css`
  background-color: ${styles.COLOR_NEUTRAL_BLUE};
  margin-bottom: ${styles.getSize(1)};
`;

export const header = css`
  text-align: left;
  padding: ${styles.getSize(2)} ${styles.getSize(3)};
`;

export const row = css`
  border-radius: ${styles.getSize(4)};

  &:hover {
    background-color: ${styles.COLOR_NEUTRAL_BLUE};
  }
`;

export const cell = css`
  padding: ${styles.getSize(2)} ${styles.getSize(3)};
`;

export const pageButtonsContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;

  > button {
    margin: ${styles.getSize(1)} 0;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;

    &:hover {
      color: ${styles.COLOR_PRIMARY_60};
    }
  }
`;

export const icon = css`
  width: ${styles.getSize(2)};
  height: ${styles.getSize(2)};
`;

export const pageInfo = css`
  margin: 0 ${styles.getSize(1)};
`;

export const iconsContainer = css`
  display: flex;
`;

export const negativeRightMargin = css`
  margin-right: -${styles.getSize(1)};
`;

export const paginationContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${styles.COLOR_NEUTRAL_BLUE};
  padding: ${styles.getSize(2)} ${styles.getSize(3)};
`;

export const pageSelector = css`
  outline: none;
  border: none;
  background: none;
`;

export const searchContainer = css`
  display: flex;
  align-items: center;
  position: relative;
  width: fit-content;
  margin-bottom: ${styles.getSize(2)};
`;

export const searchInput = css`
  background-color: ${styles.COLOR_NEUTRAL_BLUE};
  padding: ${styles.getSize(1)} ${styles.getSize(2)};
  outline: none;
  border: none;
  color: ${styles.COLOR_NEUTRAL_60};
  border-radius: ${styles.getSize(1 / 2)};
`;

export const searchIcon = css`
  color: ${styles.COLOR_NEUTRAL_60};
  position: absolute;
  right: ${styles.getSize(1)};
  width: ${styles.getSize(2.5)};
  height: ${styles.getSize(2.5)};
`;

export const resetPasswordIcon = css`
  color: ${styles.COLOR_PRIMARY_36};
  background-color: rgba(0, 111, 183, 0.2);
  transition: background-color 200ms;
  margin-right: ${styles.getSize(2)};
  border-radius: ${styles.getSize(1 / 2)};

  &:hover {
    background-color: rgba(0, 111, 183, 0.4);
  }
`;

export const deleteUserIcon = css`
  color: ${styles.COLOR_RED};
  background-color: rgba(235, 87, 87, 0.2);
  transition: background-color 200ms;
  border-radius: ${styles.getSize(1 / 2)};

  &:hover {
    background-color: rgba(235, 87, 87, 0.4);
  }
`;

export const topBar = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const newUser = css`
  color: ${styles.COLOR_WHITE};
  background-color: ${styles.COLOR_PRIMARY_36};
  transition: background-color 200ms;
  padding: ${styles.getSize(1)} ${styles.getSize(4)};
  border-radius: ${styles.getSize(1 / 2)};
  cursor: pointer;

  &:hover {
    background-color: ${styles.COLOR_PRIMARY_20};
  }
`;
