import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta = {
  title: "Button",
  component: Button,
  args: {
    text: {
      control: "text",
    },
    disabled: { control: "boolean" },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "button",
    children: <div>hoge</div>,
    onClick: () => {
      console.log("test");
    },
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
