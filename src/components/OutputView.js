import React, { Component } from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

import Graph from "./Graph";
import AxisBar from "./AxisBar";

export default class OutputView extends Component<{}> {
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
        <AxisBar is_vertical={true} />
        <Graph heart_samples={heart_samples} />
        <AxisBar />
      </View>
    );
  }
}
