import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from '../../components/Utils/Card';
import { Text } from '../../components/Utils/Text';

export default {
  title: "Utils/Card",
  component: Card,
} as ComponentMeta<typeof Card>;
  
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardOutline = Template.bind({});
CardOutline.args = {
  type: 'outlined',
  children: <Text variant="h5">Card Title</Text>,
  css: {
    width: '300px',
    padding: '10px'
  }
};
