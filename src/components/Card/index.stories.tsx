import type { Meta, StoryObj } from "@storybook/react";

import { Card } from ".";
import { CardBody } from "@components";
import { CardBodyTest } from "../CardBody/index.stories";

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: <CardBody {...CardBodyTest.args} />,
  },
  render: (args) => <Card {...args}></Card>,
};
