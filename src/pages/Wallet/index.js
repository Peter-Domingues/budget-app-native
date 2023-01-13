import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Wallet() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>teste</View>
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
    </SafeAreaProvider>
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
