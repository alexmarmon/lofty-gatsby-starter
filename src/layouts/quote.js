import React from 'react'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'
import styles from '../styles'
import favicon from '../assets/favicon.ico'

const QuoteTemplateWrapper = ({ children }) => pug`
  .app
    Helmet(
      title="Quote Page"
      link=[
        { rel: 'icon', href: favicon, type: 'image/x-icon' }
      ]
    )
    .main-container
      ${children()}
`

injectGlobal`
  html, body {
    background-color: ${styles.backgroundMainColor};
  }
`

export default QuoteTemplateWrapper
