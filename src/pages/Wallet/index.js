import React from "react";
import SafeAreaCustomized from "../../components/SafeAreaCustomized";
import { Button } from "react-native-paper";

const Wallet = () => {
  return (
    <SafeAreaCustomized>
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
    </SafeAreaCustomized>
  );
};

export default Wallet;
