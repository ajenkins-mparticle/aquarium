import { type Meta, type StoryObj } from '@storybook/react'
import { QueryItem } from 'src/components'

const meta: Meta<typeof QueryItem.ValueSelector.TextInput> = {
  title: 'Aquarium/Data Entry/QueryItem/ValueSelector/TextInput',
  component: QueryItem.ValueSelector.TextInput,
  parameters: {
    docs: {
      description: {
        component:
          'This is the "Text Input" component of the QueryItem/ValueSelector component group.'
      },
    },
  },
  args: {
    onChange: ((value : string | number) => console.log(value)),
  }
}

export default meta;

type Story = StoryObj<typeof QueryItem.ValueSelector.TextInput>

export const Primary: Story = {
  
}