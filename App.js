/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

import AppleHealthKit from "rn-apple-healthkit";

let options = {
  permissions: {
    read: ["HeartRate"],
    write: []
  }
};

var testSamples = undefined;

AppleHealthKit.initHealthKit(
  (options: Object),
  (err: string, results: Object) => {
    if (err) {
      console.log("error initializing Healthkit: ", err);
      return;
    }
    let options = {
      unit: "bpm", // optional; default 'bpm'
      startDate: new Date(2016, 4, 27).toISOString(), // required
      endDate: new Date().toISOString(), // optional; default now
      ascending: false, // optional; default false
      limit: 10 // optional; default no limit
    };

    AppleHealthKit.getHeartRateSamples(
      options,
      (err: Object, results: Array<Object>) => {
        if (err) {
          return;
        }
        testSamples = results;
        console.log(testSamples);
      }
    );
  }
);

let data = [
  [
    {
      x: -10,
      y: -1000
    },
    {
      x: -9,
      y: -729
    },
    {
      x: -8,
      y: -512
    },
    {
      x: -7,
      y: -343
    },
    {
      x: -6,
      y: -216
    },
    {
      x: -5,
      y: -125
    },
    {
      x: -4,
      y: -64
    },
    {
      x: -3,
      y: -27
    },
    {
      x: -2,
      y: -8
    },
    {
      x: -1,
      y: -1
    },
    {
      x: 0,
      y: 0
    },
    {
      x: 1,
      y: 1
    },
    {
      x: 2,
      y: 8
    },
    {
      x: 3,
      y: 27
    },
    {
      x: 4,
      y: 64
    },
    {
      x: 5,
      y: 125
    },
    {
      x: 6,
      y: 216
    },
    {
      x: 7,
      y: 343
    },
    {
      x: 8,
      y: 512
    },
    {
      x: 9,
      y: 729
    },
    {
      x: 10,
      y: 1000
    }
  ],
  [
    {
      x: -10,
      y: 100
    },
    {
      x: -9,
      y: 81
    },
    {
      x: -8,
      y: 64
    },
    {
      x: -7,
      y: 49
    },
    {
      x: -6,
      y: 36
    },
    {
      x: -5,
      y: 25
    },
    {
      x: -4,
      y: 16
    },
    {
      x: -3,
      y: 9
    },
    {
      x: -2,
      y: 4
    },
    {
      x: -1,
      y: 1
    },
    {
      x: 0,
      y: 0
    },
    {
      x: 1,
      y: 1
    },
    {
      x: 2,
      y: 4
    },
    {
      x: 3,
      y: 9
    },
    {
      x: 4,
      y: 16
    },
    {
      x: 5,
      y: 25
    },
    {
      x: 6,
      y: 36
    },
    {
      x: 7,
      y: 49
    },
    {
      x: 8,
      y: 64
    },
    {
      x: 9,
      y: 81
    },
    {
      x: 10,
      y: 100
    }
  ]
];

let options2 = {
  width: 280,
  height: 280,
  color: "#2980B9",
  margin: {
    top: 20,
    left: 45,
    bottom: 25,
    right: 20
  },
  animate: {
    type: "delayed",
    duration: 200
  },
  axisX: {
    showAxis: true,
    showLines: true,
    showLabels: true,
    showTicks: true,
    zeroAxis: false,
    orient: "bottom",
    label: {
      fontFamily: "Arial",
      fontSize: 14,
      fontWeight: true,
      fill: "#34495E"
    }
  },
  axisY: {
    showAxis: true,
    showLines: true,
    showLabels: true,
    showTicks: true,
    zeroAxis: false,
    orient: "left",
    label: {
      fontFamily: "Arial",
      fontSize: 14,
      fontWeight: true,
      fill: "#34495E"
    }
  }
};
import { SmoothLine } from "react-native-pathjs-charts";

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        {testSamples ? (
          testSamples.map(sample => <Text>sample.value</Text>)
        ) : (
          <Text />
        )}

        <SmoothLine data={data} options={options2} xKey="x" yKey="y" />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
