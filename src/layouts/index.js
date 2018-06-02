import React from 'react'
import Helmet from 'react-helmet'
import favicon from '../assets/favicon.ico'
import Logo from '../assets/images/lofty-logo.svg'

const TemplateWrapper = ({ children, data }) => {
  const meta = data.site.siteMetadata
  return (
    <div className="app">
      <Helmet
        title={meta.title}
        meta={[
          { name: 'description', content: meta.description },
          { name: 'keywords', content: meta.keywords },
          { property: 'og:url', content: meta.url },
          { property: 'og:type', content: meta.type },
          { property: 'og:title', content: meta.title },
          { property: 'og:description', content: meta.description },
          { property: 'og:image', content: `https://www.thatslofty.com${Logo}` }
        ]}
        link={[
        { rel: 'icon', href: favicon, type: 'image/x-icon' }
      ]}
      />
      <div className="main-container">
        { children() }
      </div>
    </div>
  )
}


export const query = graphql`
  query MetaQuery {
    site {
      siteMetadata {
        title,
        description,
        keywords,
        url,
        type
      }
    }
  }
`

export default TemplateWrapper
