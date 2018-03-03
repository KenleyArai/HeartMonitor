import React, { Component } from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

export default class Button extends Component<{}> {
  static propTypes = {
    text: PropTypes.string,
    level: PropTypes.number
  };

  static defaultProps = {
    text: "button",
    level: -1
  };

  render() {
    return (
      <View>
        <Text>Button Skeleton</Text>
        <Text> {this.props.text} </Text>
        <Text> {this.props.level} </Text>
      </View>
    );
  }
}
