import React, { Component } from "react";
import { Text, View, Button, TextInput } from "react-native";
import { Header } from "react-native-elements";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from "react-native-safe-area-context";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      word: "",
      display: "",
    };
  }
  render() {
    return (
      <SafeAreaProvider>
        <View>
          <Header
            centerComponent={{
              text: "Everyone Tries To Read",
              style: { color: "#fff", fontWeight: "750" },
            }}
          />
          <TextInput
            onChangeText={(text) => {
              this.setState({
                word: text,
              });
            }}
            placeholder="Enter Word"
          />
          <Button
            onPress={() => this.setState({ display: this.state.word })}
            title="Produce"
          />
          <Text style={{ fontWeight: "500", fontSize: 30 }}>
            {this.state.display}
          </Text>
        </View>
      </SafeAreaProvider>
    );
  }
}

export default App;
