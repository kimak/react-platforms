import React, { Component } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Activity from "core/Activity";
import value from "core/value";

class App extends Component {
  render() {
    return (
      <View>
        <Activity />
        <TouchableOpacity
          style={{ marginTop: 40 }}
          onPress={() => alert("just clicked a button! " + value)}
        >
          <Text>Hello native2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
