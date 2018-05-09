import React from 'react'
import Helmet from 'react-helmet'
import favicon from '../assets/favicon.ico'
import Logo from '../assets/images/lofty-logo.svg'

const TemplateWrapper = ({ children }) => (
  <div className="app">
    <Helmet
      title="Thats Lofty"
      meta={[
        { name: 'description', content: 'Website and app development company based in Coeur d\'Alene, Idaho.' },
        { name: 'keywords', content: 'Development, Developer, Web Developer, Website Developer' },
        { property: 'og:url', content: 'https://www.thatslofty.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'That\'s Lofty' },
        { property: 'og:description', content: 'Website and app development company based in Coeur d\'Alene, Idaho.' },
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

export default TemplateWrapper
