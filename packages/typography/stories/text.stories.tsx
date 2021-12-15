import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Text, TextProps } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"

//👇 This default export determines where your story goes in the story list
export default {
  title: "General/Typography/Text",
  component: Text,
  decorators: [withTests({ results })],
} as Meta

export const Basic: Story<TextProps> = (args) => <Text {...args}>Hello Text</Text>
