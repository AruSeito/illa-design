import { forwardRef, useEffect, useRef, useState } from "react"
import { CountDownProps } from "./interface"
import dayjs from "dayjs"
import { getDateString, getDayjsValue } from "./util"

import {
  applyStatistic,
  applyStatisticContent,
  applyStatisticTitle,
} from "./style"
import { cx } from "@emotion/css"

export const Countdown = forwardRef<HTMLDivElement, CountDownProps>(
  (props, ref) => {
    const {
      title,
      value = 0,
      format = "HH:mm:ss",
      onFinish,
      className,
      onChange,
      now = dayjs(),
      start = true,
      ...restProps
    } = props

    const _now = getDayjsValue(now, format) as dayjs.Dayjs
    const deadline = (getDayjsValue(value, format) as dayjs.Dayjs) || dayjs()
    const [valueShow, setValueShow] = useState(
      Math.max(deadline.diff(_now, "millisecond"), 0),
    )
    const timerRef = useRef<number | undefined>(undefined)
    const stopTimer = () => {
      window.clearInterval(timerRef.current)
      timerRef.current = void 0
    }

    const startTimer = () => {
      timerRef.current = window.setInterval(() => {
        const _value = deadline.diff(dayjs(), "millisecond")
        const valueShow = Math.max(_value, 0)
        onChange && onChange(valueShow)
        if (_value <= 0) {
          stopTimer()
          onFinish && onFinish()
        }
        setValueShow(valueShow)
      }, 1000 / 30)
    }

    useEffect(() => {
      if (!timerRef.current && start) {
        if (deadline.valueOf() >= Date.now()) {
          startTimer()
        }
      }
      return () => {
        stopTimer()
      }
    }, [start])
    return (
      <div
        ref={ref}
        className={cx(applyStatistic(), className)}
        {...restProps}
      >
        {title && <div className={applyStatisticTitle}>{title}</div>}
        <div className={applyStatisticContent}>
          {getDateString(valueShow, format)}
        </div>
      </div>
    )
  },
)

Countdown.displayName = "Countdown"
