import "react-native";
import React from "react";
import InputView from "../../src/components/InputView";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<InputView />).toJSON();
  expect(tree).toMatchSnapshot();
});
