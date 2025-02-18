import { Icons } from 'src/constants/Icons'
import './icon.css'

type IconSize = 'xxxxl' | 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export type IconColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'white'
  | 'black'
  | 'text'
  | 'strong'
  | 'brand'

export interface IIconProps {
  name: keyof typeof Icons
  color?: IconColor
  size?: IconSize
}

export const Icon = (props: IIconProps) => {
  const IconName = Icons[props.name]
  const className = `icon-size-${props.size} icon-color-${props.color}`
  const iconId = `icon-${props.name}`

  return <IconName className={className} data-test={iconId} />
}

Icon.defaultProps = {
  color: 'default',
  size: 'lg',
} satisfies Partial<IIconProps>
