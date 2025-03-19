import { MainButton } from "@/shared/ui";
import { StoryObj } from "@storybook/react";

const meta = {
  title: "MainButton",
  component: MainButton,
  parameters: {},
  argTypes: {
    fullWidth: { control: "boolean" },
  },
  args: {
    fullWidth: true,
    isPending: false,
    text: "Default",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    type: "button",
    fullWidth: true,
  },
};

export const SubmitButton: Story = {
  args: {
    type: "submit",
  },
};
