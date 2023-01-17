import React from "react";
import Nav from "./src/components/Nav";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import { StatusBar, StyleSheet } from "react-native";
import store from "./src/store";
import Colors from "./src/themes/colors";

const storeConfig = store();

export default function App() {
  return (
    <ReduxProvider store={storeConfig}>
      <Provider>
        <NavigationContainer>
          <StatusBar backgroundColor={Colors.green100} />
          <Nav />
        </NavigationContainer>
      </Provider>
    </ReduxProvider>
  );
}
