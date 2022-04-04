import { css } from '@emotion/react'
import * as consts from '@@consts'

export const fontBase = css`
  letter-spacing: ${consts.LETTER_SPACING};
`

export const fontMedium32 = css`
  ${fontBase};
  font-size: ${consts.FONT_MEDIUM_32_SIZE};
  font-weight: ${consts.FONT_MEDIUM_32_WEIGHT};
`

export const fontMedium40 = css`
  ${fontBase};
  font-size: ${consts.FONT_MEDIUM_40_SIZE};
  font-weight: ${consts.FONT_MEDIUM_40_WEIGHT};
`

export const fontRegular14 = css`
  font-size: ${consts.FONT_REGULAR_14_SIZE};
  font-weight: ${consts.FONT_REGULAR_14_WEIGHT};
  line-height: ${consts.FONT_REGULAR_14_LINE_HEIGHT};
`

export const fontRegular20 = css`
  ${fontBase};
  font-size: ${consts.FONT_REGULAR_20_SIZE};
  font-weight: ${consts.FONT_REGULAR_20_WEIGHT};
`
