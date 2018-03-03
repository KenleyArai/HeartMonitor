import "react-native";
import React from "react";
import EmotionalButton from "../../src/components/EmotionalButton";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<EmotionalButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
