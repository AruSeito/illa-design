import { css } from "@emotion/react"
import { TriggerColorScheme } from "@illa-design/trigger"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const applyTypographyContainer = css`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  padding: 16px;
`

export const applyButtonGroupStyle = css`
  align-self: end;
`

export function applyTitleColor(colorScheme: TriggerColorScheme) {
  const textColor =
    colorScheme == "white"
      ? globalColor(`--${illaPrefix}-gray-02`)
      : globalColor(`--${illaPrefix}-white-02`)
  return css`
    color: ${textColor};
  `
}
