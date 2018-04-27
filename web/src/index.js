import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from "react-native";
import Activity from "core/Activity";

class App extends React.Component {
  render() {
    return (
      <View style={styles.box}>
        <Activity />
        <Text style={styles.text}>Hello, world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: "bold" }
});

AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", { rootTag: document.getElementById("root") });
