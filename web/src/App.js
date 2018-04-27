import React, { Component } from "react";
import value from "core/value";

class App extends Component {
  render() {
    return (
      <button onClick={() => alert("just clicked a button! " + value)}>
        Hello web
      </button>
    );
  }
}

export default App;
