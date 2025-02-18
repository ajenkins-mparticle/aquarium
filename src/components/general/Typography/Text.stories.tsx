import { type Meta } from '@storybook/react'
import { type StoryObj } from '@storybook/react'
import { Space } from 'src/components'
import { Switch } from 'src/components'
import { Typography } from 'src/components/general/Typography/Typography'
import { ExampleStory } from 'src/utils/ExampleStory'
import { useState } from 'react'
import { expect } from '@storybook/test'

const meta: Meta<typeof Typography.Text> = {
  title: 'Aquarium/General/Typography.Text',
  component: props => <Typography.Text {...props}>Example Text</Typography.Text>,

  args: {
    code: false,
    copyable: false,
    delete: false,
    disabled: false,
    editable: false,
    ellipsis: false,
    keyboard: false,
    mark: false,
    strong: false,
    italic: false,
    type: undefined,
    underline: false,
    onClick: (event: React.MouseEvent) => {
      console.log('Text Clicked')
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['secondary', 'success', 'warning', 'danger'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Typography.Text>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {
  play: async context => {
    const text = context.canvasElement.querySelector('span')
    void expect(text?.textContent).toEqual('Example Text')
  },
}

export const Code: Story = {
  args: {
    code: true,
  },
}

export const Copyable: Story = {
  args: {
    copyable: true,
  },
}

export const Deleted: Story = {
  args: {
    delete: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Editable: Story = {
  args: {
    editable: true,
  },
}

export const Keyboard: Story = {
  args: {
    keyboard: true,
  },
}

export const Marked: Story = {
  args: {
    mark: true,
  },
}

export const Strong: Story = {
  args: {
    strong: true,
  },
}

export const Italic: Story = {
  args: {
    italic: true,
  },
}

export const Success: Story = {
  args: {
    type: 'success',
  },
}

export const Secondary: Story = {
  args: {
    type: 'secondary',
  },
}

export const Warning: Story = {
  args: {
    type: 'warning',
  },
}

export const Danger: Story = {
  args: {
    type: 'danger',
  },
}

export const Underline: Story = {
  args: {
    underline: true,
  },
}

export const CustomOnClick: Story = {
  args: {
    onClick: event => {
      alert('Custom Click Handler')
    },
  },
}

export const ExampleTexts: Story = {
  render: () => {
    return (
      <ExampleStory title={<> </>}>
        <Space direction="vertical">
          <Typography.Text>Ant Design (default)</Typography.Text>
          <Typography.Text type="secondary">Ant Design (secondary)</Typography.Text>
          <Typography.Text type="success">Ant Design (success)</Typography.Text>
          <Typography.Text type="warning">Ant Design (warning)</Typography.Text>
          <Typography.Text type="danger">Ant Design (danger)</Typography.Text>
          <Typography.Text disabled>Ant Design (disabled)</Typography.Text>
          <Typography.Text mark>Ant Design (mark)</Typography.Text>
          <Typography.Text code>Ant Design (code)</Typography.Text>
          <Typography.Text keyboard>Ant Design (keyboard)</Typography.Text>
          <Typography.Text underline>Ant Design (underline)</Typography.Text>
          <Typography.Text delete>Ant Design (delete)</Typography.Text>
          <Typography.Text strong>Ant Design (strong)</Typography.Text>
          <Typography.Text italic>Ant Design (italic)</Typography.Text>
        </Space>
      </ExampleStory>
    )
  },
}

export const ExampleEllipsis: Story = {
  render: () => {
    const [ellipsis, setEllipsis] = useState(true)
    return (
      <ExampleStory title="Toggle ellipsis on and off.">
        <Switch
          checked={ellipsis}
          onChange={() => {
            setEllipsis(!ellipsis)
          }}
        />
        <Typography.Text
          style={ellipsis ? { width: 200 } : undefined}
          ellipsis={ellipsis ? { tooltip: 'I am ellipsis now!' } : false}>
          Ant Design, a design language for background applications, is refined by Ant UED Team.
        </Typography.Text>
        <Typography.Text
          code
          style={ellipsis ? { width: 200 } : undefined}
          ellipsis={ellipsis ? { tooltip: 'I am ellipsis now!' } : false}>
          Ant Design, a design language for background applications, is refined by Ant UED Team.
        </Typography.Text>
      </ExampleStory>
    )
  },
}
