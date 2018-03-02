import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import OutputView from "./OutputView";
import InputView from "./InputView";

export default class HeartPage extends Component<{}> {
  static propTypes = {
    heart_samples: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number,
        startDate: PropTypes.string
      })
    )
  };

  static defaultProps = {
    heart_samples: [
      {
        value: 80,
        startDate: "2018-03-02T06:12:54.536-0800"
      }
    ]
  };

  render() {
    return (
      <View>
        <OutputView />
        {this.props.heart_samples.map(result => (
          <Text key={result["startDate"]}>
            {"BPM:" + result["value"] + "\t\tDate:" + result["startDate"]}
          </Text>
        ))}
        <InputView />
      </View>
    );
  }
}
