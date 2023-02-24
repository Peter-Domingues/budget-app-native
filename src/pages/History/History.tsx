import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import SafeAreaCustomized from "../../components/SafeAreaCustomized";
import HistoryStyles from "./styles";
import AccordionCard from "../../components/AccordionCard";
import { getHistory } from "../../api/HistoryApi";
import { HistoryType, item } from "../../types/ResponseTypes";
import { convertMonth } from "../../helpers/ConvertMonth";
import { useSelector } from "react-redux";

const History = () => {
  const [history, setHistory] = useState<HistoryType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const refreshReducers = useSelector((state: any) => state.refreshReducers);

  const init = async () => {
    setIsLoading(true);
    await getHistory().then((res) => {
      setHistory(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (refreshReducers.refreshing) {
      init();
    }
  }, [refreshReducers.refreshing]);

  return (
    <SafeAreaCustomized isLoading={isLoading} canRefresh>
      <View style={HistoryStyles.container}>
        <Text style={HistoryStyles.title}>Histórico</Text>
        {history?.map((item, index) => {
          let items: item[] = [];

          item.Months.map((month) => {
            const amount = month.MonthIncoming - month.MonthSpendings;
            const newItem: item = {
              title: convertMonth(month.Month),
              value: amount,
              goTo: "Files",
              isMoney: true,
              isNegative: amount < 0,
            };

            items.push(newItem);
          });

          return (
            <AccordionCard
              key={index}
              title={item._id.year.toString()}
              subtitle={item.YearProfit.toString()}
              items={items}
            />
          );
        })}
      </View>
    </SafeAreaCustomized>
  );
};

export default History;
