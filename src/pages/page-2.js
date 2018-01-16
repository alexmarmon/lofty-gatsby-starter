import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { MainHeader } from '../styles'

import image from '../assets/images/sample.jpg'

const SecondPage = () => pug`
  SecondPageStyles
    MainHeader Hi from the second page
    Link(to="/") Go back to the homepage
    img(src=image)
`

const SecondPageStyles = styled.div`
  h1 {
    color: red;
  }
  img {
    width: 100vw;
  }
`
export default SecondPage
