import { CSSProperties, HTMLAttributes, ReactNode } from "react"
import { Dayjs } from "dayjs"

export interface StatisticProps
  extends Omit<HTMLAttributes<HTMLElement>, "title" | "prefix"> {
  title?: string | ReactNode
  value?: string | number | Dayjs
  valueStyle?: CSSProperties
  decimalSeparator?: string
  format?: string
  groupSeparator?: string
  loading?: boolean
  precision?: number
  prefix?: string | ReactNode
  suffix?: string | ReactNode
}

export interface CountDownProps
  extends Omit<HTMLAttributes<HTMLElement>, "title" | "onChange"> {
  title?: string | ReactNode
  value?: string | number | Dayjs | Date
  valueStyle?: CSSProperties
  now?: string | number | Dayjs | Date
  format?: string
  start?: boolean
  onFinish?: () => void
  onChange?: (value: number) => void
}
