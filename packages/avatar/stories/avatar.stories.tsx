import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Avatar, AvatarProps } from "../src"
import { BsFacebook } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Avatar",
  component: Avatar,
  argTypes: {
    colorScheme: {
      defaultValue: "blue",
      control: {
        type: "text",
      },
    },
    src: {
      control: {
        type: "text",
      },
    },
    size: {
      options: ["small", "medium", "large"],
      defaultValue: "small",
      control: {
        type: "select",
      },
    },
    text: {
      control: {
        type: "text",
      },
    },
    shape: {
      options: ["circle", "square"],
      defaultValue: "circle",
      control: {
        type: "select",
      },
    },
    icon: {},
  },
  parameters: {
    zeplinLink: "zpl://screen?sid=6183c5489b28c93340ca98c5&pid=617f7cd2526c70be1a3bf3ff",
  },
} as Meta

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Basic = Template.bind({
  icon: <BsFacebook />,
})


