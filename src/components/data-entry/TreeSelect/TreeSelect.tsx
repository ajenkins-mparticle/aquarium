import { TreeSelect as AntTreeSelect, type TreeSelectProps as AntTreeSelectProps } from 'antd'

export interface ITreeSelectProps extends AntTreeSelectProps {}

export const TreeSelect = (props: ITreeSelectProps) => {
  return (
    <>
      <AntTreeSelect {...props} />
    </>
  )
}
