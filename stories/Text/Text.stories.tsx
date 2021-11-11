import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from '../../components/Utils/Text';

export default {
  title: "Utils/Text",
  component: Text,
} as ComponentMeta<typeof Text>;
  
const Template: ComponentStory<typeof Text> = (args) => <Text {...args}/>;

export const Heading1 = Template.bind({});
Heading1.args = {
  children: "Heading1",
  variant: "h1",
  css: {color: 'green'}
}

export const Heading2 = Template.bind({});
Heading2.args = {
  children: "Heading2",
  variant: "h2",
  css: {color: 'red'}
}

export const Heading3 = Template.bind({});
Heading3.args = {
  children: "Heading3",
  variant: "h3",
  css: {color: 'blue'}
}

export const Heading4 = Template.bind({});
Heading4.args = {
  children: "Heading3",
  variant: "h4",
  css: {color: 'blue'}
}

export const Heading5 = Template.bind({});
Heading5.args = {
  children: "Heading5",
  variant: "h5",
  css: {color: 'blue'}
}

export const Heading6 = Template.bind({});
Heading6.args = {
  children: "Heading6",
  variant: "h6",
  css: {color: 'blue'}
}

export const Overline = Template.bind({});
Overline.args = {
  children: "overline",
  variant: "overline",
  css: {color: 'blue'}
}

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  children: "subtitle1",
  variant: "subtitle1",
  css: {color: 'blue'}
}

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  children: "subtitle2",
  variant: "subtitle2",
  css: {color: 'blue'}
}

export const Body1 = Template.bind({});
Body1.args = {
  children: "Body1",
  variant: "body1",
  css: {color: 'blue'}
}

export const Body2 = Template.bind({});
Body2.args = {
  children: "Body2",
  variant: "body2",
  css: {color: 'blue'}
}
