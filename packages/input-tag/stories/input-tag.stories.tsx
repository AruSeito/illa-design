/** @jsxImportSource @emotion/react */
import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { InputTagProps, InputTag } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/InputTag",
  component: InputTag,
  argTypes: {
    suffix: {
      control: {
        type: "text",
      },
    },
  },
} as Meta

const Template: Story<InputTagProps> = (props) => {
  return (
    <div>
      <InputTag {...props} />
    </div>
  )
}

export const Basic = Template.bind({})
