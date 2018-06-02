import React from 'react'
import styled from 'styled-components'

const Sample = () => (
  <SampleStyles>
    <h1>Sample Component</h1>
  </SampleStyles>
)

const SampleStyles = styled.div.attrs({ className: 'sample-styles' })`
  h1 {
    color: blue;
  }
`

export default Sample
