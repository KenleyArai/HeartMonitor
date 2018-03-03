import "react-native";
import React from "react";
import AxisBar from "../../src/components/AxisBar";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<AxisBar />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Need to test Bar and Vertical Bar
