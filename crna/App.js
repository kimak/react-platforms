import React, { Component } from "react";
import { View, Text } from "react-native";
import value from "core/value";
import hello from "core/hello";

class App extends Component {
  render() {
    return (
      <View
        style={{ marginTop: 40 }}
      >
        <Text>{hello} {value}</Text>
      </View>
    );
  }
}

export default App;
