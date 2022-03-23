import React, { forwardRef, MouseEvent, useMemo, useState } from "react"
import { AlertProps } from "./interface"
import { AnimatePresence, motion } from "framer-motion"
import {
  CloseIcon,
  ErrorIcon,
  InfoCircleIcon,
  RightIcon,
  WarningCircleIcon,
} from "@illa-design/icon"
import {
  applyAlert,
  applyAlertAction,
  applyAlertCloseBtn,
  applyAlertContainer,
  applyAlertContent,
  applyAlertContentWrapper,
  applyAlertIcon,
  applyAlertTitle,
} from "./style"
import { cx } from "@emotion/css"

const iconMap = {
  info: <InfoCircleIcon />,
  success: <RightIcon />,
  warning: <WarningCircleIcon />,
  error: <ErrorIcon />,
}

const variants = {
  enter: {
    opacity: 1,
    transformOrigin: "0% 0%",
    transform: "scaleY(1) translateZ(0)",
  },
  hidden: {
    opacity: 0,
    transformOrigin: "0% 0%",
    transform: "scaleY(0.8) translateZ(0)",
    transition: {
      opacity: { duration: 0.2, ease: "linear" },
      transform: { duration: 0.2, ease: "linear" },
    },
  },
  show: {
    opacity: 1,
    transformOrigin: "0% 0%",
    transform: "scaleY(1) translateZ(0)",
    transition: {
      opacity: { duration: 0.2, ease: "linear" },
      transform: { duration: 0.2, ease: "linear" },
    },
  },
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    style,
    className,
    title,
    action,
    closable,
    type = "info",
    content,
    icon,
    showIcon = true,
    banner,
    closeElement,
    onClose,
    afterClose,
    ...restProps
  }: AlertProps & { children?: React.ReactNode | undefined } = props
  const [visible, setVisible] = useState<boolean>(true)
  const renderIcon = useMemo(() => {
    return icon ? icon : iconMap[type]
  }, [icon, type])

  const onHandleClose = (e: MouseEvent) => {
    setVisible(false)
    onClose && onClose(e)
  }
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          style={style}
          className={cx(
            applyAlertContainer(type, !!content, !!banner),
            className,
          )}
          variants={variants}
          animate={"show"}
          exit={"hidden"}
          initial={"enter"}
          ref={ref}
          onAnimationComplete={(definition) => {
            if (definition === "hidden") {
              afterClose && afterClose()
            }
          }}
        >
          <div className={applyAlert(!!content)} {...restProps}>
            {showIcon && (
              <div className={applyAlertIcon(type, !!content)}>
                {renderIcon}
              </div>
            )}
            <div className={applyAlertContentWrapper}>
              {title && (
                <div className={applyAlertTitle(!!content)}>{title}</div>
              )}
              {content && <div className={applyAlertContent}>{content}</div>}
            </div>
            {action && <div className={applyAlertAction}>{action}</div>}
            {closable && (
              <button
                className={applyAlertCloseBtn(type)}
                onClick={onHandleClose}
              >
                {closeElement || <CloseIcon />}
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
})

Alert.displayName = "Alert"
