import { css } from 'styled-components'

const font = 'sans-serif'

const black = '#000000'
const white = '#ffffff'
const primary = '#c06c84'
const secondary = '#6c5b7b'

const boxShadows = [
  'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
]

const spaces = [0, 4, 8, 16, 32, 64, 128]
const fontSizes = [12, 14, 16, 20, 24, 32, 40, 56, 72, 80]


const button = {
  size: [70, 40],
  margin: '0 auto',
  borderRadius: 10,
}

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
}

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const  coloredTheme = {
  above,
  below,
  boxShadows,
  font,
  spaces,
  fontSizes,
  button,
  size,
  colors: {
    fontColor: primary,
    backgroundColor: secondary,
  },
}

export const  lightTheme = {
  above,
  below,
  boxShadows,
  font,
  spaces,
  fontSizes,
  button,
  size,
  colors: {
    fontColor: black,
    backgroundColor: white,
  },
}

export const  darkTheme = {
  above,
  below,
  boxShadows,
  font,
  spaces,
  fontSizes,
  button,
  size,
  colors: {
    fontColor: white,
    backgroundColor: black,
  },
}
