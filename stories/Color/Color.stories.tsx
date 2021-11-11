import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Color } from '../../components/Color';

export default {
  title: "Element/Color",
  component: Color,
} as ComponentMeta<typeof Color>;
  
const Template: ComponentStory<typeof Color> = (args) => <Color {...args} />;

export const ColorRed = Template.bind({});
ColorRed.args = {
  hex: "ff0000"
};

export const ColorGreen = Template.bind({});
ColorGreen.args = {
  hex: "00ff00"
};

export const ColorBlue = Template.bind({});
ColorBlue.args = {
  hex: "0000ff"
};
