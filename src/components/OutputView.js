import React, { Component } from "react";
import { Text, View } from "react-native";

export default class OutputView extends Component<{}> {
  render() {
    return (
      <View>
        <View>
          <Text>X-Axis Bar</Text>
        </View>
        <View>
          <Text>Graph</Text>
        </View>
        <View>
          <Text>Y-Axis Bar</Text>
        </View>
      </View>
    );
  }
}
