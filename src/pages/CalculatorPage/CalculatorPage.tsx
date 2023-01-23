import React from "react";
import SafeAreaCustomized from "../../components/SafeAreaCustomized";
import AppCalculator from "../../components/AppCalculator";
import { View } from "react-native";
import CalculatorPageStyles from "./styles";
import { Text } from "react-native-paper";

const CalculatorPage = () => {
  return (
    <SafeAreaCustomized>
      <Text style={CalculatorPageStyles.title}>Calculadora</Text>
      <View style={CalculatorPageStyles.container}>
        <AppCalculator />
      </View>
    </SafeAreaCustomized>
  );
};

export default CalculatorPage;
