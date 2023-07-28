import type { Meta, StoryObj } from "@storybook/react";

import { CardTitle } from ".";

const meta = {
  component: CardTitle,
} satisfies Meta<typeof CardTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "Text",
  },
  render: (args) => <CardTitle {...args} />,
};
