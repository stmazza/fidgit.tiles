import React, {Component} from 'react';

class ButtonInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  };

  // Add a render function which returns JSX
    handleClick = (event) => {
      console.log(event)
      let currentCount = this.state.count
      currentCount = currentCount + 1
    this.setState({"count": currentCount});
  }



  render() {
    return (
      <li className="ButtonInput cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Button</div>
            <p className="card-text">
              <div className="input btn-block">
                <input type="button" value="Click me!" className="btn" onClick={this.handleClick}/>
              </div>
              <div className="output">
                <label for="buttonOutput">State: </label>
                <span name="buttonOutput">{this.state.count}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    )
  }
}

export default ButtonInput;
