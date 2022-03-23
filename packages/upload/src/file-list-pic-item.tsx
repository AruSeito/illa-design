import { forwardRef } from "react"
import { FileListItemProps } from "./interface"
import {
  applyFileItemTitleCss,
  fileItemContainerCss,
  filePicItemCss,
  imageSizeCss,
} from "./styles"
import { Image } from "@illa-design/image"
import * as React from "react"
import { getDeleteButton, getRightIcon } from "./file-list-util"

const getObjectUrl = (file?: File) => {
  if (file) {
    const url = window.URL ? URL : webkitURL
    return url.createObjectURL(file)
  }
}

export const FileListPicItem = forwardRef<HTMLSpanElement, FileListItemProps>(
  (props, ref) => {
    const { deleteUpload, item, reUpload } = props
    const { name, percent, status, url, originFile } = item
    const picUrl = url ? url : getObjectUrl(originFile)
    let rightView = getRightIcon(status, item, percent, reUpload)
    const deleteButton = getDeleteButton(item, deleteUpload)
    return (
      <div className={fileItemContainerCss}>
        <div className={filePicItemCss}>
          <Image
            className={imageSizeCss}
            width={40}
            height={40}
            radius={"2px"}
            src={picUrl}
          />
          <span className={applyFileItemTitleCss(status == "error")}>
            {name}
          </span>
          {rightView}
        </div>
        {deleteButton}
      </div>
    )
  },
)
