import styled, { injectGlobal } from 'styled-components'
import variables from './variables'
import { media } from './mixins'

injectGlobal`
  html {
    height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0px;
  }

  /* mediaQuery examples */
  ${media.largeDesktop``}
  ${media.desktop``}
  ${media.tablet``}
  ${media.largePhone``}
  ${media.phone``}
  ${media.smallPhone``}
`
