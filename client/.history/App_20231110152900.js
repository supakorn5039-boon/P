import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Text>Let build</Text>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  
})
