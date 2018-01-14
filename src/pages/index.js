import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.data = this.props.data.allTestJson.edges
  }

  render = () => pug`
    HomePageStyles
      h1 Hi people
      h2 ${this.data[0].node.age}
      p Welcome to your new Gatsby site.
      Link(to="/page-2/") Go to page 2
  `
}

const HomePageStyles = styled.div`
  font-size: 20px;
  text-align: center;
`

export const query = graphql`
  query GetData {
    allTestJson {
      edges {
        node {
          age
        }
      }
    }
  }
`
