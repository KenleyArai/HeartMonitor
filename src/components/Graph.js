import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import { AreaChart } from "react-native-svg-charts";
import * as shape from "d3-shape";

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
      <AreaChart
        style={{ height: 250 }}
        data={heart_samples.map(sample => sample["value"])}
        curve={shape.curveNatural}
        svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
      />
    );
  }
}
