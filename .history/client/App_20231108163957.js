import React from "react";

import { SafeAreaView } from "react-native";
import Navigation from "./components/Nav/Navigate";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
