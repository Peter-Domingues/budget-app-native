import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Table from "../../componets/Table";
import { ScrollView } from "react-native-web";

export default function Test() {
  const header = [
    { title: "Fonte", isNumeric: false },
    { title: "Valor", isNumeric: true },
    { title: "Data", isNumeric: false },
    { title: "", isNumeric: false },
  ];
  const rows = [
    { fonte: "Agua", valor: 200, data: "1213" },
    { fonte: "Luz", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Fonte", valor: 200, data: "1213" },
    { fonte: "Teste", valor: 200, data: "1213" },
  ];

  return (
    <SafeAreaProvider>
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
