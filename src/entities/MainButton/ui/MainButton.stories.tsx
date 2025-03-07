import { MainButton } from "@/entities/MainButton";
import { StoryObj } from "@storybook/react";

const meta = {
  title: "MainButton",
  component: MainButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    fullWidth: { control: "boolean" },
  },
  args: {
    fullWidth: true,
    text: "Default",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    type: "button",
    // fullWidth: false,
  },
};

export const SubmitButton: Story = {
  args: {
    type: "submit",
  },
};
