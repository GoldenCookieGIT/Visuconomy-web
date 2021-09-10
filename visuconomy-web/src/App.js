import React, { Component } from "react";
import SideBar from "./components/sidebar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <SideBar />
        <main className="container"></main>
      </React.Fragment>
    );
  }
}

export default App;
