import { forwardRef } from "react"
import { TabPaneProps } from "./interface"
import { tabPaneContainerCss } from "./styles"

export const TabPane = forwardRef<HTMLDivElement, TabPaneProps>(
  (props, ref) => {
    const { children } = props
    return (
      <div className={tabPaneContainerCss} ref={ref}>
        {children}
      </div>
    )
  },
)
