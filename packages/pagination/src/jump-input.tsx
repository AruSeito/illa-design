import { forwardRef, useContext, useState } from "react"
import { JumperInputProps } from "./interface"
import {
  applyJumperInputCss,
  jumperTitleCss,
  paginationContainer,
} from "./style"
import { Input } from "@illa-design/input"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"

export const JumperInput = forwardRef<HTMLSpanElement, JumperInputProps>(
  (props, ref) => {
    const { onEnterPress, wholeDisable, size } = props

    const [compositionValue, setCompositionValue] = useState<string>("")

    const configProviderProps = useContext<ConfigProviderProps>(
      ConfigProviderContext,
    )
    const locale = configProviderProps?.locale?.pagination ?? def.pagination

    const goToText = locale["go"]

    return (
      <span className={paginationContainer}>
        <span className={jumperTitleCss}>{goToText}</span>
        <Input
          className={applyJumperInputCss(size, wholeDisable)}
          value={compositionValue}
          size={size}
          textCenterHorizontal={true}
          disabled={wholeDisable}
          onChange={(val) => {
            const value = val?.replace(/[^\d]/, "")
            setCompositionValue(value)
          }}
          onPressEnter={() => {
            onEnterPress(Number.parseInt(compositionValue))
          }}
          requirePadding={false}
          variant={"fill"}
        />
      </span>
    )
  },
)
