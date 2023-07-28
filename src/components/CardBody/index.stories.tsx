import type { Meta, StoryObj } from "@storybook/react";

import { CardBody } from ".";

const meta = {
  component: CardBody,
} satisfies Meta<typeof CardBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "Text",
  },
  render: (args) => <CardBody {...args} />,
};
