import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PointsRemaining from './points-remaining'
import Category from './category'
import specialData from './special-data'
import Error from './error'

class App extends Component {
  state = {
    remaining: 28,
    error: false,
    message: ''
  }

  componentDidMount() {
    const defaultPoints = specialData.reduce(function(acc, obj) { return acc + obj.points; }, 0);
    return this.setState({
      remaining: 28 - defaultPoints
    })
  }

  increaseRemaining = () => {
    this.setState(prevState => {
      return {
        remaining: prevState.remaining + 1
      }
    })
  }

  decreaseRemaining = () => {
    this.setState(prevState => {
      return {
        remaining: prevState.remaining - 1
      }
    })
  }

  handleError = (message) => {
    this.setState({
      error: true,
      message: message
    })
  }

  removeError = () => {
    this.setState({
      error: false,
      message: ''
    })
  }

  render() {
    const data = specialData.map(d => {
      return <Category {...d} remaining={this.state.remaining} increaseRemaining={this.increaseRemaining} decreaseRemaining={this.decreaseRemaining} handleError={this.handleError} />
    })

    return (
      <div>
        { this.state.error && <Error message={this.state.message} removeError={this.removeError} /> }
        <div className="headline">You're S.P.E.C.I.A.L.</div>
        {data}
        <PointsRemaining remaining={this.state.remaining} />
      </div>
    );
  }
}

export default App;
