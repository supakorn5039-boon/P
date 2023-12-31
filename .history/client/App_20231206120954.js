import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Navigate from "./Nav/Navigate";
import RemoteConfig from "@react-native-firebase/remote-config";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <Navigate />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
