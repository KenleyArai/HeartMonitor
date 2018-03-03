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

  static defaultProps = {
    heart_samples: [
      {
        value: -1,
        startDate: "2018-03-02T06:12:54.536-0800"
      }
    ]
  };

  render() {
    let { heart_samples } = { ...this.props };
    return (
      <View>
        <Text>Number of Samples: {heart_samples.length}</Text>
      </View>
    );
  }
}
