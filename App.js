import React from "react";
import Nav from "./src/componets/Nav";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-native-paper";

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Nav />
      </NavigationContainer>
    </Provider>
  );
}
