import React, { Component } from "react";
import "./App.css";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  sayHello = () => {
    alert("Hello! This is a static message.");
  };

  handleIncrement = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  syntheticEvent = (e) => {
    alert("I was clicked");
    console.log(e);
  };

  render() {
    return (
      <div className="App">
        <h1>React Event Examples</h1>

        <h2>Counter : {this.state.count}</h2>

        <button onClick={this.handleIncrement}>
          Increment
        </button>

        <button onClick={this.decrement}>
          Decrement
        </button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome")}>
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.syntheticEvent}>
          OnPress
        </button>

        <hr />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;