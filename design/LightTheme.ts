/*
 * This theme is copy/pasted from figma, via the Token Buddy for Ant Design plugin
 *  */

import { type IMpThemeConfig } from 'design/MpThemeConfig'

export const LightTheme: IMpThemeConfig = {
  token: {
    colorLinkHover: '#ab8eff',
    controlOutline: 'rgba(0.21176470816135406, 0, 0.8196078538894653, 0.10000000149011612)',
    controlItemBgHover: '#f8f6fb',
    controlItemBgActive: '#ebe8f8',
    controlItemBgActiveHover: '#c3aeff',
    colorText: '#0f0e0e',
    colorTextSecondary: '#212020',
    colorTextTertiary: '#2c2d2b',
    colorTextQuaternary: '#505249',
    colorFill: '#dcdcd8',
    colorFillSecondary: '#ebe8f8',
    colorFillTertiary: '#faf9f8',
    colorFillQuaternary: '#f8f6fb',
    colorBgLayout: '#fff',
    colorBgSpotlight: '#2c2d2b',
    colorBorder: '#c3aeff',
    colorBorderSecondary: '#eceae9',
    colorSplit: '#eceae9',
    colorBgMask: '#babbb5',
    colorTextBase: '#0f0e0e',
    colorPrimary: '#3600d1',
    colorError: '#f5222d',
    fontFamily:
      "'GT America', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    fontFamilyCode: "'Roboto Mono', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    'mpBrandPrimary.1': '#f8f6fb',
    'mpBrandPrimary.2': '#ebe8f8',
    'mpBrandPrimary.3': '#dbceff',
    'mpBrandPrimary.4': '#c3aeff',
    'mpBrandPrimary.5': '#ab8eff',
    'mpBrandPrimary.6': '#8255ff',
    'mpBrandPrimary.7': '#5f29f8',
    'mpBrandPrimary.8': '#3600d1',
    'mpBrandPrimary.9': '#2c00aa',
    'mpBrandPrimary.10': '#20007a',
    'mpBrandSecondary.1': '#fff',
    'mpBrandSecondary.2': '#faf9f8',
    'mpBrandSecondary.3': '#eceae9',
    'mpBrandSecondary.4': '#dcdcd8',
    'mpBrandSecondary.5': '#babbb5',
    'mpBrandSecondary.6': '#717368',
    'mpBrandSecondary.7': '#505249',
    'mpBrandSecondary.8': '#2c2d2b',
    'mpBrandSecondary.9': '#212020',
    'mpBrandSecondary.10': '#0f0e0e',
    mpColorBorderDisabled: '#dcdcd8',
  },
  components: {
    Steps: {
      colorFillContent: '#dcdcd8',
      colorPrimary: '#2c2d2b',
      controlItemBgActive: '#babbb5',
    },
    Button: {
      borderColorDisabled: '#dcdcd8',
      primaryShadow: '0 2px 0 rgba(54, 0, 209, 0.1)',
    },
    Menu: {
      darkItemBg: '#212020',
      darkItemColor: '#babbb5',
      darkItemDisabledColor: '#505249',
      darkSubMenuItemBg: '#0f0e0e',
      itemHoverBg: '#f8f6fb',
      subMenuItemBg: '#faf9f8',
      darkGroupTitleColor: '#babbb5',
    },
    Progress: {
      defaultColor: '#2c2d2b',
      remainingColor: '#eceae9',
    },
    Select: {
      multipleItemBg: '#ebe8f8',
      mpColorBorderDisabled: '#dcdcd8',
    },
    Table: {
      footerBg: '#faf9f8',
      headerBg: '#faf9f8',
      headerSplitColor: '#eceae9',
      rowSelectedHoverBg: '#ebe8f8',
    },
    Input: {
      activeShadow: '0 0 0 2px rgba(54, 0, 209, 0.1)',
      mpColorBorderDisabled: '#dcdcd8',
    },
    Checkbox: {
      mpColorBorderDisabled: '#dcdcd8',
    },
    Radio: {
      mpColorBorderDisabled: '#dcdcd8',
    },
    DatePicker: {
      mpColorBorderDisabled: '#dcdcd8',
    },
    TimePicker: {
      mpColorBorderDisabled: '#dcdcd8',
    },
    InputNumber: {
      mpColorBorderDisabled: '#dcdcd8',
    },
  },
}