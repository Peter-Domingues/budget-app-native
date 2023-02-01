import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import SafeAreaCustomized from "../../components/SafeAreaCustomized";
import HistoryStyles from "./styles";
import AccordionCard from "../../components/AccordionCard";
import { getIncomingHistory, getSpendingHistory } from "../../api/HistoryApi";
interface id {
  year: number;
  month: number;
}
interface Months {
  month: number;
  amount: number;
}
interface item {
  title: string;
  value: string;
  goTo: string;
  isMoney: boolean;
  isNegative: boolean;
}

interface History {
  _id: id;
  TotalIncoming: number;
  TotalSpendings: number;
  Months: Months[];
}

const History = () => {
  const [history, setHistory] = useState<History[]>();
  const [items, setItems] = useState<item[]>([]);
  const convertMonth = (month: number) => {
    switch (month) {
      case 1:
        return "Janeiro";
        break;
      case 2:
        return "Fevereiro";
        break;
      case 3:
        return "Março";
        break;
      case 4:
        return "Abril";
        break;
      case 5:
        return "Maio";
        break;
      case 6:
        return "Junho";
        break;
      case 7:
        return "Julho";
        break;
      case 8:
        return "Agosto";
        break;
      case 9:
        return "Setembro";
        break;
      case 10:
        return "Outubro";
        break;
      case 11:
        return "Novembro";
        break;
      case 12:
        return "Dezembro";
        break;
      default:
        break;
    }
  };

  const init = async () => {
    await getIncomingHistory().then((res) => {
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
          const newArray = [...test];

          item.Months.map((month) => {
            const foundIndex = test.findIndex(
              (element) => element.title === convertMonth(month.month)
            );
            console.log(newArray[foundIndex]);
            const newItem = {
              title: convertMonth(month.month),
              value:
                // foundIndex !== 0
                //   ? month.amount + newArray[foundIndex].value
                //   :
                month.amount,
              goTo: "Renda",
              isMoney: true,
              isNegative: month.amount < 0,
            };

            if (foundIndex != -1) {
              console.log(newArray[foundIndex].value);
              const newItemAgain = {
                title: convertMonth(month.month),
                value: month.amount + newArray[foundIndex].value,
                goTo: "Renda",
                isMoney: true,
                isNegative: month.amount < 0,
              };
              newArray[foundIndex] = newItemAgain;
              test = newArray;
            } else {
              newArray.push(newItem);
              test = newArray;
            }
          });

          return (
            <AccordionCard
              title={item._id.year.toString()}
              subtitle={item.Profit}
              items={test}
            />
          );
        })}
      </View>
    </SafeAreaCustomized>
  );
};

export default History;
