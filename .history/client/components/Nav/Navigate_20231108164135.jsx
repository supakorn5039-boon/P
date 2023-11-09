import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import WelcomeScreen from "../screens/WelcomeScreen";
import Map from "../Map/Map";
import Com from "../place/Com";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={screenOptions}>
        <Stack.Screen
          name="Welcome"
          screenOptions={screenOptions}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Login"
          screenOptions={screenOptions}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Signup"
          screenOptions={screenOptions}
          component={SignUpScreen}
        />
        <Stack.Screen
          name="Map"
          screenOptions={screenOptions}
          component={Map}
        />

        <Stack.Screen
          name="Com"
          screenOptions={screenOptions}
          component={Com}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
