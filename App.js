import React from "react";
import Nav from "./src/componets/Nav";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Nav />
    </NavigationContainer>
  );
}
