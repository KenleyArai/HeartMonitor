import "react-native";
import React from "react";
import HeartPage from "../../src/components/HeartPage";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<HeartPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
