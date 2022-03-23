import { forwardRef, ReactNode, useContext } from "react"
import { TriggerNodeProps, UploadRefType } from "./interface"
import useDrop from "react-use/lib/useDrop"
import {
  applyDragUploadContainerCss,
  applyDragUploadTitleCss,
  applyIconCss,
  dragUploadTipCss,
} from "./styles"
import { AddIcon } from "@illa-design/icon"
import * as React from "react"
import { traverseFileTree } from "./traverse-file-tree"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"

export const TriggerNode = forwardRef<UploadRefType, TriggerNodeProps>(
  (props, ref) => {
    const { disabled, tip, onFileDragged, onClick, accept } = props
    const state = useDrop({
      onFiles: (files, event?: DragEvent) => {
        traverseFileTree(
          Array.prototype.slice.call(event?.dataTransfer?.items),
          (files) => {
            onFileDragged && onFileDragged(files)
          },
          accept,
        )
      },
    })

    let tipNode: ReactNode
    if (typeof tip === "string") {
      tipNode = <div className={dragUploadTipCss}>{tip}</div>
    } else {
      tipNode = <div>{tip}</div>
    }

    const configProviderProps = useContext<ConfigProviderProps>(
      ConfigProviderContext,
    )

    const locale = configProviderProps?.locale?.upload ?? def.upload
    const dragTip = locale["dragTip"]

    return (
      <>
        <span
          onClick={onClick}
          className={applyDragUploadContainerCss(disabled)}
        >
          <AddIcon className={applyIconCss(disabled)} />
          <span className={applyDragUploadTitleCss(disabled)}>{dragTip}</span>
          {tipNode}
        </span>
      </>
    )
  },
)
