import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import SafeAreaCustomized from "../../components/SafeAreaCustomized";
import AnimatedCard from "../../components/AnimatedCard";
import WalletStyles from "./styles";
import { month } from "../../helpers/DateHelper";
import { getBill } from "../../api/BillsApi";
import { getIncoming } from "../../api/IncomingApi";
import SafeAreaCustomizedSlice from "../../store/reducers/SafeAreaCustomizedReducer";
import { useDispatch, useSelector } from "react-redux";
import { rowItems } from "../../types/ResponseTypes";

const Wallet = () => {
  const dispatch = useDispatch();
  const [incoming, setIncoming] = useState<number>(0);
  const [spending, setSpending] = useState<number>(0);
  const [paidBills, setPaidBills] = useState<number>(0);
  const [bills, setBills] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const currentMonth = month();
  const safeAreaCustomizedReducers = useSelector(
    (state: any) => state.safeAreaCustomizedReducers
  );

  const init = async () => {
    setIsLoading(true);
    await Promise.all([getBill(currentMonth), getIncoming(currentMonth)])
      .then((res) => {
        let currentBills = 0;
        setSpending(res[0].data.Total);
        setIncoming(res[1].data.Total);
        setBills(res[0].data.result.length);
        res[0].data.result.map(
          (bill: rowItems) => bill.isChecked && currentBills++
        );
        setIsLoading(false);
        setPaidBills(currentBills);
      })
      .finally(() =>
        dispatch(SafeAreaCustomizedSlice.actions.IS_REFRESHING(false))
      );
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    init();
  }, [safeAreaCustomizedReducers.refreshing]);

  return (
    <SafeAreaCustomized isLoading={isLoading}>
      <View style={WalletStyles.container}>
        <Text style={WalletStyles.title}>Carteira</Text>
        <AnimatedCard
          cardTitle="Renda"
          cardValue={incoming.toString()}
          goTo="Renda"
          isMoney
        />
        <AnimatedCard
          cardTitle="Gastos"
          isNegative
          cardValue={spending.toString()}
          goTo="Bills"
          isMoney
        />
        <AnimatedCard
          cardTitle="Contas"
          isNegative
          cardValue={bills.toString()}
          goTo="Bills"
        />
        <AnimatedCard
          cardTitle="Contas Pagas"
          cardValue={paidBills.toString()}
          goTo="Bills"
        />
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
