import React, { Component } from 'react'
import TweeterLogo from '../twitter.svg'
import './Login.css'

class Login extends Component {
  state = {
    username: ''
  }

  handleInputChange = event => {
    this.setState({ username: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { username } = this.state

    if (!username.length) {
      return
    }

    localStorage.setItem('@GoTwitter:username', username)
    this.props.history.push('/timeline')
  }
  render() {
    return (
      <div className='login-wrapper'>
        <img src={TweeterLogo} alt='Tweetergo' />
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='Nome de usuário'
            onChange={this.handleInputChange}
            value={this.state.username}
          />
          <button type='submit'>
            Entrar
          </button>
        </form>
      </div>
    )
  }
}

export default Login