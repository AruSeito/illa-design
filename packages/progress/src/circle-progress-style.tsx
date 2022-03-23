import { css } from "@emotion/css"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const applyCircleStatus = css`
  position: absolute;
  display: inline-flex;
  font-size: 16px;
`

export const applyProgressText = css`
  position: absolute;
  line-height: 22px;
  font-size: 14px;
  color: ${globalColor(`--${illaPrefix}-gray-04`)};
`
