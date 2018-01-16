import React from 'react'
import Helmet from 'react-helmet'

import favicon from '../assets/favicon.ico'

const TemplateWrapper = ({ children }) => pug`
  .app
    Helmet(
      title="awesome title"
      meta=[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]
      link=[
        { rel: 'icon', href: favicon, type: 'image/x-icon' }
      ]
    )
    .header header
    .main-container
      ${children()}
`

export default TemplateWrapper
