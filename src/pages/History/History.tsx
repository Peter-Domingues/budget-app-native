import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import SafeAreaCustomized from "../../components/SafeAreaCustomized";
import HistoryStyles from "./styles";
import AccordionCard from "../../components/AccordionCard";
import { getHistory } from "../../api/HistoryApi";
interface id {
  year: number;
}
interface Months {
  Month: number;
  MonthSpendings: number;
  MonthIncoming: number;
}
interface item {
  title: string | undefined;
  value: number;
  goTo: string;
  isMoney: boolean;
  isNegative: boolean;
}

interface History {
  _id: id;
  TotalIncoming: number;
  TotalBillss: number;
  Months: Months[];
  YearProfit: number;
}

const History = () => {
  const [history, setHistory] = useState<History[]>();
  const convertMonth = (month: number) => {
    switch (month) {
      case 1:
        return "Janeiro";
      case 2:
        return "Fevereiro";
      case 3:
        return "Março";
      case 4:
        return "Abril";
      case 5:
        return "Maio";
      case 6:
        return "Junho";
      case 7:
        return "Julho";
      case 8:
        return "Agosto";
      case 9:
        return "Setembro";
      case 10:
        return "Outubro";
      case 11:
        return "Novembro";
      case 12:
        return "Dezembro";
      default:
        break;
    }
  };

  const init = async () => {
    await getHistory().then((res) => {
      setHistory(res.data);
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <SafeAreaCustomized>
      <View style={HistoryStyles.container}>
        <Text style={HistoryStyles.title}>Histórico</Text>
        {history?.map((item) => {
          let test: item[] = [];

          item.Months.map((month) => {
            const amount = month.MonthIncoming - month.MonthSpendings;
            const newItem: item = {
              title: convertMonth(month.Month),
              value: amount,
              goTo: "Renda",
              isMoney: true,
              isNegative: amount < 0,
            };

            test.push(newItem);
          });

          return (
            <AccordionCard
              title={item._id.year.toString()}
              subtitle={item.YearProfit.toString()}
              items={test}
            />
          );
        })}
      </View>
    </SafeAreaCustomized>
  );
};

export default History;
