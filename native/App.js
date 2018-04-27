import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import value from "core/value";

class App extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{ marginTop: 40 }}
        onPress={() => alert("just clicked a button! " + value)}
      >
        <Text>Hello native</Text>
      </TouchableOpacity>
    );
  }
}

export default App;
