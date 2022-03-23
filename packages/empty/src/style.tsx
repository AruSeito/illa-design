import { css } from "@emotion/css"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const emptyContainerCss = css`
  vertical-align: middle;
  color: ${globalColor(`--${illaPrefix}-gray-05`)};
  text-align: center;
`

export const iconCss = css`
  width: 64px;
  height: 64px;
`

export const descriptionCss = css`
  color: ${globalColor(`--${illaPrefix}-gray-05`)};
  font-size: 14px;
`
