import styled, { injectGlobal } from 'styled-components'
import variables from './variables'

injectGlobal`
  h1, h2, h3, p {
    color: ${variables.brandPrimary};
  }
`
