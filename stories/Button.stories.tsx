import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from '../src';

export default {
  title: 'Buttons/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  children: 'Button',
  variant: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Button',
  variant: 'warning',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Button',
  variant: 'success',
};
