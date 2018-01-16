import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Sample from '../components/sample'
import styles, { MainHeader } from '../styles'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.data = this.props.data.allTestJson.edges
  }

  render = () => pug`
    HomePageStyles
      MainHeader Sample data:
      h2 ${this.data[0].node.age}
      Sample
      Link(to="/page-2/") Go to page 2
  `
}

const HomePageStyles = styled.div`
  font-size: 20px;
  text-align: center;
  color: ${styles.gray50};

  ${styles.media.desktop`
    border: 1px solid #000000;
  `}
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
