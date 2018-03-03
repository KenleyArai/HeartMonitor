import React, { Component } from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

export default class VerticalBar extends Component<{}> {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
  };

  render() {
    return (
      <View>
        <Text>VerticalBar</Text>
      </View>
    );
  }
}
