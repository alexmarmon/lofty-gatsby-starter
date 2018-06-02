import React from 'react'
import styled from 'styled-components'
import styles from '../styles'
import Logo from '../assets/images/lofty-logo.svg'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: '100vh'
    }
  }

  componentDidMount() {
    // only access window inside component did mount
    this.setState({ height: window ? window.innerHeight : '100vh' })  // eslint-disable-line
  }

  render = () => (
    <HomePageStyles>
      <img src={Logo} alt="logo" />
      <p>Coming Soon...</p>
      <p>{this.props.data.dataJson.foo}</p>
      <a href="mailto:info@thatslofty.com">Contact</a>
    </HomePageStyles>
  )
}

export const query = graphql`
  query IndexQuery {
    dataJson {
      foo
    }
  }
`

const HomePageStyles = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${styles.backgroundMainColor};
  font-size: 20px;
  color: ${styles.blueFont};
  font-family: 'CaviarDreams-Bold';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 100px;
    margin-bottom: 100px;
  }

  a, p {
    color: ${styles.blueFont};
  }

  /* other media query examples in styles/layout.js */
  ${styles.media.desktop`
    /* background-color: blue; */
  `}
`

export default HomePage
