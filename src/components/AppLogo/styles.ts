import { css } from '@emotion/react'

export function getRoot(color: string) {
  return css`
    fill: ${color};
  `
}
