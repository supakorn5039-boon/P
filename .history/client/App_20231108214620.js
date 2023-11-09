import React from "react";

import { create}
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/LoginScreen";

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
