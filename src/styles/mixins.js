import { css } from 'styled-components'
import variables from './variables'

// sizes for media query mixin
const sizes = variables.mediaSizes

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export default {
  media
}
