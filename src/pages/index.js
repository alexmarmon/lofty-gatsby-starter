import React from 'react'
import styled from 'styled-components'
import styles from '../styles'
import Logo from '../assets/images/lofty-logo.svg'

const HomePage = () => (
  <HomePageStyles>
    <img src={Logo} alt="logo" />
    <p>Coming Soon...</p>
    <a href="mailto:info@thatslofty.com">Contact</a>
  </HomePageStyles>
)

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
`

export default HomePage
