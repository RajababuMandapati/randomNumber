// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  onGRNumber = () => {
    const newRandom = Math.ceil(Math.random() * 100)

    this.setState({randomNumber: newRandom})
  }
  render() {
    const {randomNumber} = this.state

    return (
      <div className="container">
        <div className="random-container">
          <h1 className="heading">Random Number</h1>
          <p>Generate the Random Number in the 0 to 100</p>
          <button type="button" className="generator" onClick={this.onGRNumber}>
            Generator
          </button>

          <h1 className="random-number">{randomNumber}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
