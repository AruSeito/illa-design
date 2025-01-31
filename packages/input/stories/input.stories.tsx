/** @jsxImportSource @emotion/react */
import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { PersonIcon } from "@illa-design/icon"
import { InputProps, Input } from "../src"

import { BsFacebook } from "react-icons/bs"
import { Space } from "@illa-design/space"
import { css } from "@emotion/core"
import { render } from "react-dom"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Input",
  component: Input,

  argTypes: {
    prefix: {
      control: {
        type: "text",
      },
    },
    suffix: {
      control: {
        type: "text",
      },
    },
    addonAfter: {
      control: false,
    },
    addonBefore: {
      control: false,
    },
    boarderColor: {
      options: [
        "gray",
        "blue",
        "purple",
        "red",
        "green",
        "yellow",
        "orange",
        "cyan",
        "white",
      ],
      control: {
        type: "select",
      },
    },
  },
} as Meta

const Template: Story<InputProps> = (props) => {
  return (
    <div>
      <Space direction={"vertical"} wrap>
        <Input {...props} />
        {/*<Input*/}
        {/*  suffix={{ render: <PersonIcon />,}}*/}
        {/*  {...props}*/}
        {/*/>*/}
        <Input prefix={{ render: "prefix" }} {...props} />
        <Input suffix={{ render: "suffix" }} {...props} />
        <Input
          addonBefore={{ render: "Before" }}
          addonAfter={{ render: "After" }}
          {...props}
        />
      </Space>
    </div>
  )
}

export const Basic = Template.bind({})
