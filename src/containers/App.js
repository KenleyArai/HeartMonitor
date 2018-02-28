import React, { Component } from "react";
import { View } from "react-native";

import OutputView from "../components/OutputView";
import InputView from "../components/InputView";

export default class App extends Component<{}> {
  render() {
    return (
      <View>
        <OutputView />
        <InputView />
      </View>
    );
  }
}
