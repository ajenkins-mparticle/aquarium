import { type Meta, type StoryObj } from '@storybook/react'

import { Flex } from 'src/components/layout/Flex/Flex'

const meta: Meta<typeof Flex> = {
  title: 'Aquarium/Layout/Flex',
  component: props => (
    <>
      <Flex
        {...props}
        style={{
          width: 200,
          height: 108,
          borderRadius: 6,
          border: '1px solid #40a9ff',
        }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 20,
              height: 54,
              backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf',
            }}
          />
        ))}
      </Flex>
    </>
  ),

  args: {
    vertical: false,
    wrap: 'nowrap',
    justify: 'stretch',
    align: 'normal',
    flex: '0 1 auto',
    gap: 'middle',
    component: 'div',
  },

  argTypes: {
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse', 'initial', 'revert', 'revert-layer', 'unset'],
    },
    justify: {
      control: 'select',
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
        'stretch',
      ],
    },
    align: {
      control: 'select',
      options: [
        'normal',
        'stretch',
        'center',
        'flex-start',
        'flex-end',
        'self-start',
        'self-end',
        'baseline',
      ],
    },
  },
}
export default meta

type Story = StoryObj<typeof Flex>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {}

export const VerticalFlex: Story = {
  args: {
    vertical: true,
  },
}

export const JustifyFlexStart: Story = {
  args: {
    justify: 'flex-start',
  },
}

export const JustifyCenter: Story = {
  args: {
    justify: 'center',
  },
}

export const JustifyFlexEnd: Story = {
  args: {
    justify: 'flex-end',
  },
}

export const AlignFlexStart: Story = {
  args: {
    align: 'flex-start',
  },
}

export const AlignCenter: Story = {
  args: {
    align: 'center',
  },
}

export const AlignFlexEnd: Story = {
  args: {
    align: 'flex-end',
  },
}

export const LargeGap: Story = {
  args: {
    gap: 'large',
  },
}
