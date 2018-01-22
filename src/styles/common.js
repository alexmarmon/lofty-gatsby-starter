import styled, { injectGlobal } from 'styled-components'
import variables from './variables'

injectGlobal`
  html {
    height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0;
  }

  h1, h2, h3, p {
    color: ${variables.brandPrimary};
  }
`

const MainHeader = styled.div`
  font-size: 20px;
  font-family: Montserrat;
`

export default {
  MainHeader
}
