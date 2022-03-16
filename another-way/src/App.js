import React from "react";
import Topping from "./Topping";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTopping: "anchovies",
    };
  }

  onClick(topping) {
    this.setState({ selectedTopping: topping });
  }

  render() {
    return (
      <div>
        <Topping
          handleClick={(v) => this.onClick(v)}
          type="cheese"
          selectedTopping={this.state.selectedTopping}
        />
        <Topping
          handleClick={(v) => this.onClick(v)}
          type="mushroom"
          selectedTopping={this.state.selectedTopping}
        />
        <Topping
          handleClick={(v) => this.onClick(v)}
          type="anchovies"
          selectedTopping={this.state.selectedTopping}
        />
      </div>
    );
  }
}

export default App;
