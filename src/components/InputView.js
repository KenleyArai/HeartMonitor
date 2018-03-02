import React, { Component } from "react";
import { Text, View } from "react-native";

import Button from "./Button";

export default class InputView extends Component<{}> {
  render() {
    return (
      <View>
        <Button />
        <Button />
        <Button />
      </View>
    );
  }
}
