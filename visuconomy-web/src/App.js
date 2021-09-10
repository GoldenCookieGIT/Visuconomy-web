import React, { Component } from "react";
import SideBar from "./components/sidebar";

class App extends Component {
  state = {
    currentlySelected: 0,
    items: [
      { value: "shadow rounded active" },
      { value: "null" },
      { value: "null" },
      { value: "null" },
      { value: "null" },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <SideBar onSelect={this.handleSelected} selection={this.state} />
        <main className="container"></main>
      </React.Fragment>
    );
  }
  handleSelected = (selected) => {
    if (selected === this.state.currentlySelected) return;
    console.log(selected);
    let items = [...this.state.items];
    let oldSelection = { ...items[this.state.currentlySelected] };
    let newSelection = { ...items[selected] };
    oldSelection.value = "null";
    newSelection.value = "shadow rounded active";
    items[this.state.currentlySelected] = oldSelection;
    items[selected] = newSelection;
    this.setState({ items });
    this.setState({ currentlySelected: selected });
  };
}

export default App;
