import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

export default class Graph extends Component<{}> {
  static propTypes = {
    heart_samples: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number,
        timestamp: PropTypes.string
      })
    )
  };

  render() {
    return (
      <View>
        <Text>Graph of BPM</Text>
      </View>
    );
  }
}
