import React, { Component } from "react";
import HatForm from "../src/components/HatForm";
import "./App.css";
import { hogwarts } from "./components/hogwarts-data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: [],
      isChecked: false
    };
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    console.log("You have submitted:", this.state.selectedOption);
  };

  handleOptionChange = changeEvent => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  render() {
    return (
      <div className="App">
        <HatForm
          handleFormSubmit={this.handleFormSubmit}
          handleOptionChange={this.handleOptionChange}
          checked={this.state.selectedOption === "option1"}
          isChecked={this.state.isChecked}
        />
      </div>
    );
  }
}

export default App;
