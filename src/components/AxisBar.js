import React, { Component } from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

import Bar from "./Bar";
import VerticalBar from "./VerticalBar";

export default class AxisBar extends Component<{}> {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    is_vertical: PropTypes.bool
  };

  static defaultProps = {
    is_vertical: false
  };

  render() {
    return this.props.is_vertical == true ? (
      <Bar data={this.props.data} />
    ) : (
      <VerticalBar data={this.props.data} />
    );
  }
}
