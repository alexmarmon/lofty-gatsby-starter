import React from 'react'
import styled from 'styled-components'

const Sample = () => pug`
  SampleStyles
    h1 Sample Component
`

const SampleStyles = styled.div`
  h1 {
    color: blue;
  }
`

export default Sample
