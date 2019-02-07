import React, { Component } from 'react'
import TwitterLogo from '../twitter.svg'
import Tweet from '../components/Tweet'
import './Timeline.css'
import api from '../services/api'
import socket from 'socket.io-client'
class Timeline extends Component {
  state = {
    newTweet: '',
    tweets: []
  }

  async componentDidMount() {
    this.subscribeToEvents()
    const response = await api.get('tweets')

    this.setState({ tweets: response.data })
  }

  subscribeToEvents = () => {
    const io = socket('http://localhost:3000')

    io.on('tweet', data => {
      this.setState({ tweets: [data, ...this.state.tweets] })
    })

    io.on('likes', data => {
      this.setState({ tweets: this.state.tweets.map(tweet =>
        tweet._id === data._id ? data : tweet  
      )})
    })
  }

  handleNewTweet = async event => {
    if(event.keyCode !== 13) {
      return
    }

    const content = this.state.newTweet
    const author = localStorage.getItem('@GoTwitter:username')

    await api.post('tweets', { content, author })

    this.setState({ newTweet: '' })

  }
  handleInputChange = event => {
    this.setState({ newTweet: event.target.value })
  }
  render() {
    return (
      <div className='timeline-wrapper'>
        <img src={TwitterLogo} alt='twitter' />

        <form>
          <textarea
            value={this.state.newTweet}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet}
            placeholder='O que está acontecendo ??'
          />
        </form>
        <ul className='tweet-list'>
          { this.state.tweets.map(tweet => (
            <Tweet key={tweet._id} tweet={tweet} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Timeline