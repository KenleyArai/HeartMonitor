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
    let { heart_samples } = { ...this.props };

    return (
      <View>
        <OutputView />
        {heart_samples.map(sample => (
          <Text key={sample["startDate"]}>
            {"BPM:" + sample["value"] + "\t\tDate:" + sample["startDate"]}
          </Text>
        ))}
        <InputView />
      </View>
    );
  }
}
