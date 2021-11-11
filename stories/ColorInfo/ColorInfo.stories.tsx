import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ColorInfo } from '../../components/Elements/ColorInfo';

export default {
  title: "Element/ColorInfo",
  component: ColorInfo,
} as ComponentMeta<typeof ColorInfo>;
  
const Template: ComponentStory<typeof ColorInfo> = (args) => <ColorInfo {...args} />;

export const Hex = Template.bind({});
Hex.args = {
  type: 'HEX',
  value: '88ff88'
};
