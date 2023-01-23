import React from "react";
import { Text, View } from "react-native";
import SafeAreaCustomized from "../../components/SafeAreaCustomized";
import HistoryStyles from "./styles";
import AccordionCard from "../../components/AccordionCard";

const History = () => {
  const months = [
    {
      title: "Janeiro",
      value: "2000",
      goTo: "Renda",
      isNegative: false,
      isMoney: true,
    },
    {
      title: "Fevereiro",
      value: "100",
      goTo: "Renda",
      isNegative: false,
      isMoney: true,
    },
    {
      title: "Março",
      value: "200",
      goTo: "Renda",
      isNegative: true,
      isMoney: true,
    },
  ];

  return (
    <SafeAreaCustomized>
      <View style={HistoryStyles.container}>
        <Text style={HistoryStyles.title}>Histórico</Text>
        <AccordionCard title="2022" subtitle="200" items={months} />
      </View>
    </SafeAreaCustomized>
  );
};

export default History;
