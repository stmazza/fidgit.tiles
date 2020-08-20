import React, {Component} from 'react';

class CheckboxInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      box1: 0
    }
  };

  // Add a render function which returns JSX
    handleClick = (event) => {
      console.log(event)
    let currentTotal = this.state.box1
    if ( event.target.value === 1) {
        if ( this.state.box1 === 0) {
            this.state.box1 = 1
        } else {
            this.state.box1 = 0
        }
    }
    this.setState({"total": currentTotal});
  }



  render() {
    return (
      <li className="CheckboxInput cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Checkbox</div>
            <p className="card-text">
              <div className="input">
                <input type="checkbox" name="checkboxInput" value="1" className="checkboxInput" onClick={this.handleClick}/>
                <input type="checkbox" name="checkboxInput" value="2" className="checkboxInput" onClick={this.handleClick}/>
                <input type="checkbox" name="checkboxInput" value="3" className="checkboxInput" onClick={this.handleClick}/>
                <input type="checkbox" name="checkboxInput" value="4" className="checkboxInput" onClick={this.handleClick}/>
                <input type="checkbox" name="checkboxInput" value="5" className="checkboxInput" onClick={this.handleClick}/>
              </div>
              <div className="output">
                <label for="checkboxOutput">Count: </label>
                <span name="checkboxOutput">{this.state.total}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    )
  }
}

export default CheckboxInput;
