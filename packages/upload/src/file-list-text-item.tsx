import { forwardRef, ReactNode, useMemo } from "react"
import { FileListItemProps } from "./interface"
import {
  applyFileItemTitleCss,
  fileItemContainerCss,
  fileTextItemCss,
} from "./styles"
import * as React from "react"
import {
  FileDefaultIcon,
  FileExcelIcon,
  FileMusicIcon,
  FilePdfIcon,
  FilePictureIcon,
  FilePPTIcon,
  FileVideoIcon,
  FileWordIcon,
  FileWPSIcon,
} from "@illa-design/icon"
import { getDeleteButton, getRightIcon } from "./file-list-util"

const checkFileType = (type: string, ...targetType: string[]) => {
  let flag = false
  targetType.forEach((target) => {
    if (type.indexOf(target) > -1) {
      flag = true
    }
  })
  return flag
}

const getFileIcon = (file: File) => {
  let type = ""
  if (file && file.type) {
    type = file.type
  } else {
    const name = file.name || ""
    const fileExtension = name.split(".").pop() || ""
    if (["png", "jpg", "jpeg", "bmp", "gif"].indexOf(fileExtension) > -1) {
      type = "image"
    } else if (["mp4", "m2v", "mkv"].indexOf(fileExtension) > -1) {
      type = "video"
    } else if (["mp3", "wav", "wmv"].indexOf(fileExtension) > -1) {
      type = "audio"
    }
  }
  const fileName = file.name

  if (checkFileType(type, "image")) {
    return <FilePictureIcon />
  }
  if (checkFileType(type, "video")) {
    return <FileVideoIcon />
  }
  if (checkFileType(type, "audio")) {
    return <FileMusicIcon />
  }
  if (checkFileType(fileName, "pdf")) {
    return <FilePdfIcon />
  }
  if (checkFileType(fileName, "ppt", "pptx")) {
    return <FilePPTIcon />
  }
  if (checkFileType(fileName, "xlsx", "xls")) {
    return <FileExcelIcon />
  }
  if (checkFileType(fileName, "wps")) {
    return <FileWPSIcon />
  }
  if (checkFileType(fileName, "word")) {
    return <FileWordIcon />
  }
  return <FileDefaultIcon />
}

export const FileListTextItem = forwardRef<HTMLSpanElement, FileListItemProps>(
  (props, ref) => {
    const { item, deleteUpload, reUpload } = props
    const { name, percent, status, originFile } = props.item
    const fileIcon = useMemo(() => {
      return getFileIcon(originFile)
    }, [originFile])

    let rightView = getRightIcon(status, item, percent, reUpload)
    const deleteButton = getDeleteButton(item, deleteUpload)

    return (
      <div className={fileItemContainerCss}>
        <div className={fileTextItemCss}>
          {fileIcon}
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
