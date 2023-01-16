import React from "react";
import Nav from "./src/componets/Nav";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import Home from "./src/pages/Home";
import { StatusBar } from "react-native";
import store from "./src/store";

const storeConfig = store();

export default function App() {
  return (
    <ReduxProvider store={storeConfig}>
      <Provider>
        <NavigationContainer>
          <StatusBar animated={true} backgroundColor="#61dafb" />
          <Nav />
        </NavigationContainer>
      </Provider>
    </ReduxProvider>
  );
}
