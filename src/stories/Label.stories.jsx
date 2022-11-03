import React from 'react';
import { Label } from './components/Label/Label';

export default {
  title: 'Example/Label',
  component: Label,
};

const Template = (args) => <Label {...args}/>

export const Simple = Template.bind({});
Simple.args = {
  text: 'Simple'
}