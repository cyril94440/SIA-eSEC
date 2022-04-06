import { css } from '@emotion/react'
import * as consts from '@@consts'
import * as styles from '@@styles'

export const root = css`
  display: flex;
  min-height: 100vh;
`

export const sidebar = css`
  width: ${consts.SIZE(11)};
  background-color: ${consts.COLOR_PRIMARY_36};
  padding: ${consts.SIZE(6)} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const sidebarLogoContainer = css`
  width: ${consts.SIZE(6)};
`

export const main = css`
  flex: 2;
  padding-left: ${consts.SIZE(5)};
  padding-right: ${consts.SIZE(3)};
`

export const mainTop = css`
  height: ${consts.SIZE(10)};
`

export const mainContent = css`
`

export const mainContentHeader = css`
  margin-bottom: ${consts.SIZE(12)};
`

export const scores = css`
  flex: 1;
  min-width: ${consts.SIZE(44)};
  padding-left: ${consts.SIZE(3)};
  padding-right: ${consts.SIZE(5)};
  padding-top: ${consts.SIZE(10)};
  background-color: ${consts.COLOR_NEUTRAL_BLUE};
`

export const scoresTitleContainer = css`
  padding-left: ${consts.SIZE(2)};
  margin-bottom: ${consts.SIZE(1)};
`;

export const scoresPanel = css`
  background-color: ${consts.COLOR_WHITE};
  border-radius: ${consts.SIZE(1)};
  box-shadow: ${`0px ${consts.SIZE(0.5)} ${consts.SIZE(3)} rgba(0, 0, 0, 0.04)`};
  padding: ${consts.SIZE(3)} ${consts.SIZE(6)};
`

export const scoresPanelSquared = css`
  aspect-ratio: 1;
`

export const scoresPanelGroup = css`
  display: flex;
  flex-direction: column;
  gap: ${consts.SIZE(4)};
`

export const contentTitle = css`
  ${styles.fontMedium40};
  color: ${consts.COLOR_GREY_BLUE};
  margin-bottom: ${consts.SIZE(1)};
`

export const contentSubtitle = css`
  ${styles.fontRegular14};
  color: ${consts.COLOR_GREY_BLUE};
`

export const contentText = css`
  ${styles.fontRegular14};
`

export const sectionTitle = css`
  ${styles.fontMedium32};
  margin-bottom: ${consts.SIZE(4)};
  color: ${consts.COLOR_GREY_BLUE};
`

export const sectionItem = css`
  margin-bottom: ${consts.SIZE(3)};
`

export const sectionItemTitle = css`
  ${styles.fontRegular20};
  color: ${consts.COLOR_GREY_BLUE};
  margin-bottom: ${consts.SIZE(3)};
`
