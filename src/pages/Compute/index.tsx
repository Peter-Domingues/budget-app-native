import React from "react";
import SafeAreaCustomized from "../../components/SafeAreaCustomized";
import AppCalculator from "../../components/AppCalculator";
import { View } from "react-native";

const Compute = () => {
  return (
    <SafeAreaCustomized>
      <View style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <AppCalculator />
      </View>
    </SafeAreaCustomized>
  );
};

export default Compute;
