import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Button, ButtonProps } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"
import { Space } from "@illa-design/space"
import { BsFacebook, BsTwitch } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "General/Button",
  component: Button,
  decorators: [withTests({ results })],
  parameters: {
    zeplinLink: "zpl://screen?pid=617f7cd2526c70be1a3bf3ff&sid=61a096b8454c7f89bcaa83df",
  },
  argTypes: {
    leftIcon: {
      control: false,
    },
    rightIcon: {
      control: false,
    },
  },
} as Meta

export const Basic: Story<ButtonProps> = (args) => {
  return <Space direction="horizontal" align="start" style={{width: "500px"}} wrap>
    <Button {...args}>Hello</Button>
    <Button {...args} leftIcon={<BsFacebook />}>Hello</Button>
    <Button {...args} rightIcon={<BsFacebook />}>Hello</Button>
    <Button {...args} leftIcon={<BsFacebook />} variant="outline">Hello</Button>
    <Button {...args} loading loadingText="loading text">Hello</Button>
    <Button {...args} loading>Hello</Button>
    <Button {...args} leftIcon={<BsFacebook />} />
    <Button {...args} loading />
    <Button {...args} disabled={true}>Disable</Button>
    <Button {...args} variant="text">Text</Button>
  </Space>
}
