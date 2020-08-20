import React, {Component} from 'react';

class RadioInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    }
  };

    handleClick = (event) => {
      console.log(event)
    this.setState({"rating": event.target.value});
  }

  render() {
    return (
      <li className="RadioInput cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Radio</div>
            <p className="card-text">
              <div className="input">
                <input type="radio" name="radioInput" value="1" className="checkboxInput" onClick={this.handleClick}/>
                <input type="radio" name="radioInput" value="2" className="checkboxInput" onClick={this.handleClick}/>
                <input type="radio" name="radioInput" value="3" className="checkboxInput" onClick={this.handleClick}/>
                <input type="radio" name="radioInput" value="4" className="checkboxInput" onClick={this.handleClick}/>
                <input type="radio" name="radioInput" value="5" className="checkboxInput" onClick={this.handleClick}/>
              </div>
              <div className="output">
                <label for="radioOutput">State: </label>
                <span name="radioOutput">{this.state.rating}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    )
  }
}

export default RadioInput;
