import React, {Component} from 'react';

class Button2Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "OFF"
    }
  };

  // Add a render function which returns JSX
    handleClick = (event) => {
      console.log(event)
      let currentStatus = this.state.status
      if ( currentStatus === "OFF" ) {
          currentStatus = "ON"
      } else {
          currentStatus = "OFF"
      }
    this.setState({"status": currentStatus});
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
                <span name="buttonOutput">{this.state.status}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    )
  }
}

export default Button2Input;
