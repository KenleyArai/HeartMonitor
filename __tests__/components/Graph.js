import "react-native";
import React from "react";
import Graph from "../../src/components/Graph";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Graph />).toJSON();
  expect(tree).toMatchSnapshot();
});
