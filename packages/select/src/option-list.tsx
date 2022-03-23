import * as React from "react"
import { forwardRef } from "react"
import { List } from "@illa-design/list"
import { css } from "@emotion/css"
import { Empty } from "@illa-design/empty"
import { OptionListProps } from "./interface"

export const OptionList = forwardRef<HTMLDivElement, OptionListProps<any>>(
  (props, ref) => {
    const {
      render,
      childrenList,
      notFoundContent,
      // event
      onMouseMove,
      onScroll,
    } = props

    return (
      <div
        className={css`
          background-color: white;
        `}
      >
        {childrenList?.length ? (
          <List
            ref={ref}
            className={css`
              min-width: unset !important;
              width: 100%;
              border: unset !important;
            `}
            size="small"
            data={childrenList as any}
            render={render}
            renderRaw
            onMouseMove={onMouseMove}
            onScroll={onScroll}
            renderKey={(data, index) => {
              return index?.toString()
            }}
            hoverable
          />
        ) : notFoundContent ? (
          <span>{notFoundContent}</span>
        ) : (
          <Empty
            className={css`
              padding: 16px 0;
            `}
          />
        )}
      </div>
    )
  },
)

OptionList.displayName = "OptionList"
