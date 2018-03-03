import React, { Component } from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import EmotionalButton from "./EmotionalButton";

export default class InputView extends Component<{}> {
  static propTypes = {
    levels: PropTypes.arrayOf(
      PropTypes.shape({
        level: PropTypes.number,
        title: PropTypes.string
      })
    )
  };

  static defaultProps = {
    levels: [
      { level: 0, title: "Sad" },
      { level: 1, title: "Neutral" },
      { level: 2, title: "Happy" }
    ]
  };

  render() {
    let { levels } = { ...this.props };

    return (
      <View>
        {levels.map(level => (
          <EmotionalButton
            key={level["level"]}
            level={level["level"]}
            title={level["title"]}
          />
        ))}
      </View>
    );
  }
}
