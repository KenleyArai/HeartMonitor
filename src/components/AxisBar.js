import React, { Component } from "react";
import { Text, View } from "react-native";
import { YAxis, XAxis } from "react-native-svg-charts";
import PropTypes from "prop-types";

import Bar from "./Bar";
import VerticalBar from "./VerticalBar";

export default class AxisBar extends Component<{}> {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number,
        timestamp: PropTypes.string
      })
    ),
    is_vertical: PropTypes.bool
  };

  static defaultProps = {
    is_vertical: false
  };

  render() {
    let { data, is_vertical } = { ...this.props };

    return is_vertical ? (
      <YAxis
        data={data.map(d => d["value"])}
        svg={{
          fill: "grey",
          fontSize: 10
        }}
        formatLabel={value => `${value}`}
      />
    ) : (
      <XAxis
        style={{ marginHorizontal: -10 }}
        data={data.map(d => d["timestamp"])}
      />
    );
  }
}
