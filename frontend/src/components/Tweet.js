import React, { Component } from 'react'
import  './Tweet.css'
import Like from '../like.svg'
import api from '../services/api';

class Tweet extends Component {

  handleLike = async () => {
    const { _id } = this.props.tweet

    await api.post(`likes/${_id}`)
  }
  render() {
    const { tweet } = this.props
    return (
      <li className='tweet'>
        <strong>{tweet.author}</strong>
        <p>{tweet.content}</p>
        <button type='button' onClick={this.handleLike}>
          <img src={Like} alt='Like' />
          {tweet.likes}
        </button>
      </li>
    )
  }
}

export default Tweet