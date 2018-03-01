import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import OutputView from "../components/OutputView";
import InputView from "../components/InputView";

import data from "../../MOCK_DATA.json";

export default class App extends Component<{}> {
  static defaultProps = { heart_samples: data };

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
        <OutputView />
        <InputView />
      </View>
    );
  }
}
