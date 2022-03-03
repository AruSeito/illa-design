import { Meta, Story } from "@storybook/react"
import { BsFacebook } from "react-icons/bs"
import * as React from "react"
import { Upload } from "../src"
import { UploadProps } from "../src/interface"

export default {
  title: "DATA INPUT/UploadElement",
  component: Upload,
} as Meta

const Template: Story<UploadProps> = (args) => <Upload action={""} {...args} />

export const Basic = Template.bind({})
