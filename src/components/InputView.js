import React, { Component } from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import Button from "./Button";

export default class InputView extends Component<{}> {
  static propTypes = {
    levels: PropTypes.arrayOf(PropTypes.number)
  };

  static defaultProps = {
    levels: [1, 2, 3]
  };

  render() {
    let { levels } = { ...this.props };

    return (
      <View>{levels.map(level => <Button key={level} level={level} />)}</View>
    );
  }
}
