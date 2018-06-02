const port = parseInt(process.env.PORT, 10)

module.exports = {
  siteMetadata: {
    title: 'Thats Lofty',
    description: 'Website and app development company based in Coeur d\'Alene, Idaho.',
    keywords: 'Development, Developer, Web Developer, Website Developer',
    url: 'https://www.thatslofty.com',
    type: 'website'
    // OG image set in layout index
  },
  proxy: {
    prefix: '/api',
    url: `http://127.0.0.1:${port + 30}`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
  ],
}
