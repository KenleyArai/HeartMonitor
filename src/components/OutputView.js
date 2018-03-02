import React, { Component } from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

import Graph from "./Graph";

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
        <View>
          <Text>X-Axis Bar</Text>
        </View>
        <Graph heart_samples={this.props.heart_samples} />
        <View>
          <Text>Y-Axis Bar</Text>
        </View>
      </View>
    );
  }
}
