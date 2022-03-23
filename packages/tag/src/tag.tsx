import * as React from "react"
import { forwardRef, useState } from "react"
import { TagProps } from "./interface"
import { css, cx } from "@emotion/css"
import { CloseIcon } from "@illa-design/icon"

import { omit } from "@illa-design/system"
import {
  applyTagSizeLarge,
  applyTagSizeMedium,
  applyTagSizeSmall,
  closeIcon,
  colors,
  leftIcon,
  tagContainer,
  tagFillNormal,
  tagFillPrepare,
  tagLightPrepare,
  tagOutlineNormal,
  tagOutlinePrepare,
} from "./style"

export const Tag = forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const {
    visible,
    colorScheme = "gray",
    size = "small",
    variant = "light",
    className,
    closable,
    ...rest
  } = props

  const otherProps = omit(rest, ["onClose", "icon"])

  let variantCss: string

  const [realVisible, setRealVisible] = useState(true)

  // variant
  if (colors.includes(colorScheme)) {
    switch (variant) {
      case "light": {
        variantCss = tagLightPrepare(colorScheme)
        break
      }
      case "fill": {
        variantCss = tagFillPrepare(colorScheme)
        break
      }
      case "outline": {
        variantCss = tagOutlinePrepare(colorScheme)
        break
      }
    }
  } else {
    switch (variant) {
      case "light":
      case "fill": {
        variantCss = tagFillNormal(colorScheme)
        break
      }
      case "outline": {
        variantCss = tagOutlineNormal(colorScheme)
        break
      }
    }
  }

  // size
  let sizeCss: string
  switch (size) {
    case "small": {
      sizeCss = applyTagSizeSmall(variant)
      break
    }
    case "medium": {
      sizeCss = applyTagSizeMedium(variant)
      break
    }
    case "large": {
      sizeCss = applyTagSizeLarge(variant)
      break
    }
  }

  const finalStyle = css`
    ${tagContainer};
    ${variantCss};
    ${sizeCss};
  `

  return (visible == undefined ? realVisible : visible) ? (
    <div className={cx(finalStyle, className)} ref={ref} {...otherProps}>
      {props.icon && <span className={leftIcon}>{props.icon}</span>}
      <span
        className={css`
          font-size: 14px;
          line-height: 22px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `}
      >
        {props.children}
      </span>
      {props.closable && (
        <span>
          <CloseIcon
            size="7px"
            className={closeIcon}
            onClick={() => {
              if (props.onClose != undefined) {
                props.onClose()
              }
              if (visible == undefined) {
                setRealVisible(false)
              }
            }}
          />
        </span>
      )}
    </div>
  ) : null
})

Tag.displayName = "Tag"
