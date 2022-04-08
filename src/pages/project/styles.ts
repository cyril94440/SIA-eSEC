import { css } from "@emotion/react";
import * as consts from "@@consts";
import * as styles from "@@styles";
import { fontMedium14 } from "@@styles";

export const root = css`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

export const sidebar = css`
  flex: none;
  width: ${consts.SIZE(11)};
  background: ${consts.COLOR_PRIMARY_36};
  padding: ${consts.SIZE(6)} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const main = css`
  flex: 2;
  padding-left: ${consts.SIZE(5)};
  padding-right: ${consts.SIZE(3)};
  padding-bottom: ${consts.SIZE(50)};
`;

export const sidebarLogoContainer = css`
  width: ${consts.SIZE(6)};
`;

export const mainTop = css`
  display: flex;
  align-items: end;
  height: ${consts.SIZE(10)};
  padding-bottom: ${consts.SIZE(2)};
`;

export const mainContent = css``;

export const mainContentHeader = css`
  margin-bottom: ${consts.SIZE(12)};
`;

export const scores = css`
  flex: 1;
  min-width: ${consts.SIZE(60)};
  padding-left: ${consts.SIZE(3)};
  padding-right: ${consts.SIZE(5)};
  padding-top: ${consts.SIZE(10)};
  background: ${consts.COLOR_NEUTRAL_BLUE};
`;

export const scoresTitleContainer = css`
  padding-left: ${consts.SIZE(2)};
  margin-bottom: ${consts.SIZE(1)};
`;

export const scoresPanel = css`
  background: ${consts.COLOR_WHITE};
  border-radius: ${consts.SIZE(1)};
  box-shadow: ${`0px ${consts.SIZE(1 / 2)} ${consts.SIZE(3)} rgba(0, 0, 0, 0.04)`};
  padding: ${consts.SIZE(3)} ${consts.SIZE(6)};
`;

export const scoresPanelTitle = css`
  ${styles.fontMedium20};
  color: ${consts.COLOR_GREY_BLUE};
  margin-bottom: ${consts.SIZE(4)};
`;

export const scoresPanelSquare = css`
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
`;

export const scorePanelSquareContentWrap = css`
  flex: 1;
  position: relative;
`;

export const scorePanelSquareContent = css`
  position: absolute;
  inset: 0;
`;

export const scoresPanelGroup = css`
  display: flex;
  flex-direction: column;
  gap: ${consts.SIZE(4)};
`;

export const contentTitle = css`
  ${styles.fontMedium40};
  color: ${consts.COLOR_GREY_BLUE};
  margin-bottom: ${consts.SIZE(1)};
`;

export const contentSubtitle = css`
  ${styles.fontRegular14};
  color: ${consts.COLOR_GREY_BLUE};
`;

export const contentText = css`
  ${styles.fontRegular14};
`;

export const contentControlLabel = css`
  ${styles.fontMedium14};
  color: ${consts.COLOR_GREY_BLUE};
  margin-bottom: ${consts.SIZE(2)};
`;

export const contentControlContainer = css`
  max-width: ${consts.SIZE(65)};
`;

export const contentSectionTitle = css`
  ${styles.fontMedium32};
  margin-bottom: ${consts.SIZE(4)};
  color: ${consts.COLOR_GREY_BLUE};
`;

export const contentSectionItem = css`
  margin-bottom: ${consts.SIZE(5)};
`;

export const contentSectionItemTitle = css`
  ${styles.fontRegular20};
  color: ${consts.COLOR_GREY_BLUE};
  margin-bottom: ${consts.SIZE(2)};
`;

export const status = css`
  color: ${consts.COLOR_SUCCESS_40};
`;

export const statusLabel = css`
  ${styles.fontMedium14};
`;

export const statusValue = css`
  ${styles.fontRegular14};
`;

export const overallScoreValue = css`
  ${styles.fontMedium32};
  color: ${consts.COLOR_GREY_BLUE};
  margin-bottom: ${consts.SIZE(1)};
`;

export const icao = css`
  display: flex;
  align-items: baseline;
`;

export const icaoStatusBlock = css`
  ${styles.fontMedium20};
  flex: 1;
  color: ${consts.COLOR_GREY_BLUE};
`;

export const icaoMissingFeaturesBlock = css`
  ${styles.fontMedium10Caps};
  flex: none;
  color: ${consts.COLOR_GREY_BLUE};
  cursor: pointer;
`;

export const icaoNotCompliant = css`
  color: ${consts.COLOR_CRITICAL_50};
`;
