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

  render() {
    return (
      <View>
        <AxisBar is_vertical={true} />
        <Graph heart_samples={this.props.heart_samples} />
        <AxisBar />
      </View>
    );
  }
}
