import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import HeartPage from "../components/HeartPage";
import AppleHealthKit from "rn-apple-healthkit";

export default class App extends Component<{}> {
  state = {
    loaded: false,
    timer: null,
    counter: 0,
    heart_samples: []
  };

  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    let options = {
      permissions: {
        read: ["HeartRate"]
      }
    };

    AppleHealthKit.initHealthKit(
      (options: Object),
      (err: string, results: Object) => {
        if (err) {
          console.log("error initializing Healthkit: ", err);
          return;
        }
      }
    );

    let timer = setInterval(this.tick, 1000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  tick() {
    let options = {
      unit: "bpm", // optional; default 'bpm'
      startDate: new Date(2017, 4, 27).toISOString(), // required
      endDate: new Date().toISOString(), // optional; default now
      ascending: false, // optional; default false
      limit: 100
    };

    AppleHealthKit.getHeartRateSamples(
      options,
      (err: Object, results: Array<Object>) => {
        if (err) {
          return;
        }
        this.setState({ heart_samples: results.reverse(), loaded: true });
      }
    );
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    let { counter, loaded, heart_samples } = { ...this.state };

    return (
      <View>
        <Text>{counter}</Text>
        {loaded ? (
          <HeartPage heart_samples={heart_samples} />
        ) : (
          <Text>Loading</Text>
        )}
      </View>
    );
  }
}
