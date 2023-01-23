import React from "react";
import { Text, View } from "react-native";
import SafeAreaCustomized from "../../components/SafeAreaCustomized";
import AnimatedCard from "../../components/AnimatedCard";
import WalletStyles from "./styles";

const Wallet = () => {
  return (
    <SafeAreaCustomized>
      <View style={WalletStyles.container}>
        <Text style={WalletStyles.title}>Carteira</Text>
        <AnimatedCard
          cardTitle="Renda"
          cardValue="14000"
          goTo="Renda"
          isMoney
        />
        <AnimatedCard
          cardTitle="Gastos"
          isNegative
          cardValue="14000"
          goTo="Spending"
          isMoney
        />
        <AnimatedCard
          cardTitle="Contas"
          isNegative
          cardValue="2"
          goTo="Spending"
        />
        <AnimatedCard cardTitle="Contas Pagas" cardValue="1" goTo="Spending" />
        <AnimatedCard
          cardTitle="Sobras"
          isMoney
          cardValue="1000"
          goTo="Profit"
        />
      </View>
    </SafeAreaCustomized>
  );
};

export default Wallet;
