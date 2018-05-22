import React from 'react'

class Category extends React.Component {
  state = {
    points: this.props.points
  }

  handleDecrease = () => {
    if (this.state.points > 0) {
      this.setState((prevState) => {
        return {
          points: prevState.points - 1
        }
      })

      this.props.increaseRemaining()
    } else {
      this.props.handleError("Why would you want negative points?")
    }
  }

  handleIncrease = () => {
    if (this.state.points < 10 && this.props.remaining > 0) {
      this.setState((prevState) => {
        return {
          points: prevState.points + 1
        }
      })

      this.props.decreaseRemaining()
    } else if (this.state.points === 10){
      this.props.handleError("You're already at max points (10)!")
    } else {
      this.props.handleError("You have no points remaining!")
    }
  }

  render(){
    return(
    <div className="category-box">
      <div className="category-background">
        <div className="category-name">{this.props.name}</div>
        <div className="arrow-container">
          <i className="fas fa-arrow-left arrow" onClick={this.handleDecrease}></i>
          <div className="category-value">{this.state.points}</div>
          <i className="fas fa-arrow-right arrow" onClick={this.handleIncrease}></i>
        </div>
      </div>
    </div>
  )
  }
}

export default Category
