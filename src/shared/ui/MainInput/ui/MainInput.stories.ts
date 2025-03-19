import { MainInput } from "@/shared/ui";
import { StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "MainInput",
  component: MainInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    required: { control: "boolean" },
  },
  args: {
    placeholder: "placeholder",
    name: "name",
    errors: "Error text",
    onBlur: { onBlur: fn() },
    onChange: { onChange: fn() },
    required: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    placeholder: "Email",
  },
};
