import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Layout, LayoutProps } from './Layout'
import { LinksList } from '../../model/site/LinksList'
import { ThemeList } from '../../model/site/ThemeList'

export default {
  title: 'Component/Layout',
  component: Layout,
  argTypes: {
    internal_theme: {
      options: Object.values(ThemeList).map((t) => t.id),
      control: { type: 'select' },
    },
  },
} as Meta

const Template: Story<LayoutProps> = (args) => (
  <div data-theme={args.internal_theme}>
    <Layout {...args} />
  </div>
)

// Default scenario
export const MainLayout = Template.bind({})
MainLayout.args = {
  internal_theme: 'light',
  title: (
    <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
      <div className='text-base font-bold'>HOME</div>
      <div className='text-sm'>Next.js Opinionated</div>
    </div>
  ),
  menuItems: Object.values(LinksList),
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit.',
}
