import React, { Component } from "react";
import { Button } from "react-native";
import PropTypes from "prop-types";

export default class EmotionalButton extends Component<{}> {
  static propTypes = {
    level: PropTypes.number,
    title: PropTypes.string
  };

  static defaultProps = {
    level: -1,
    title: "undefined emotion"
  };

  render() {
    let { level, title } = { ...this.props };
    return <Button title={title} />;
  }
}
