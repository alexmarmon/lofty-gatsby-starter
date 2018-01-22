import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Sample from '../components/sample'
import styles, { MainHeader } from '../styles'
import QuoteAuth from '../components/quoteAuth'
import QuoteView from '../components/quoteView'

export default class QuotePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authed: false,
      inputValue: ''
    }
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value })
    this.submit(event.target.value)
  }

  submit = (val) => {
    axios.post('/api/auth/login', {
      password: val
    }).then((response) => {
      if (response.data.success) {
        this.setState({ authed: true })
      }
    })
  }

  render = () => pug`
    QuotePageStyle
      if this.state.authed
        QuoteView
      else
        QuoteAuth(inputValue=${this.state.inputValue} handleChange=${this.handleChange})
  `
}

const QuotePageStyle = styled.div`
  font-size: 20px
  text-align: center
`
