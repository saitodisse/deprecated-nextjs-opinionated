import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ChangeThemeDropDown, ChangeThemeDropDownProps } from './ChangeThemeDropDown'

export default {
  title: 'Component/ChangeThemeDropDown',
  component: ChangeThemeDropDown,
} as Meta

const Template: Story<ChangeThemeDropDownProps> = (args) => <ChangeThemeDropDown {...args} />

// Default scenario
export const HeadlessUI_ChangeThemeDropDown = Template.bind({})
HeadlessUI_ChangeThemeDropDown.args = {}
