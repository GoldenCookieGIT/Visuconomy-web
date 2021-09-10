import React, { Component } from "react";
import SideBar from "./components/sidebar";

class App extends Component {
  state = {
    currentlySelected: 0,
    items: [
      { value: "null" },
      { value: "null" },
      { value: "shadow rounded active" },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <SideBar
          onSelect={this.handleSelected}
          selection={"shadow rounded active"}
        />
        <main className="container"></main>
      </React.Fragment>
    );
  }
  handleSelected = (selected) => {
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
