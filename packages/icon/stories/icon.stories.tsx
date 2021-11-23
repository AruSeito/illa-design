import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { CloseIcon, Icon, IconProps, PersonIcon } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Icon",
  decorators: [withTests({ results })],
  argTypes: {
    spin: {
      control: {
        type: "boolean",
      },
    },
    measure: {
      control: {
        type: "text",
      },
    },
  },
} as Meta

export const Close: Story<IconProps> = (props) => <CloseIcon {...props} />
export const Person: Story<IconProps> = (props) => <PersonIcon {...props} />


