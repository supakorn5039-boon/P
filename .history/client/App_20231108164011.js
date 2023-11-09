import React from "react";

import { SafeAreaView } from "react-native";
import Navigate from "./components/Nav/Navigate";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigate />
    </SafeAreaView>
  );
};

export default App;
