import React, { useMemo, useEffect, useState, useCallback } from "react";
import { Text, View } from "react-native";
import SafeAreaCustomized from "../../components/SafeAreaCustomized";
import AnimatedCard from "../../components/AnimatedCard";
import WalletStyles from "./styles";
import { month } from "../../helpers/DateHelper";
import { getBill } from "../../api/BillsApi";
import { getIncoming } from "../../api/IncomingApi";
import RefreshSlice from "../../store/reducers/RefreshReducer";
import { useDispatch, useSelector } from "react-redux";
import { rowItems } from "../../types/ResponseTypes";

const Wallet = () => {
  const dispatch = useDispatch();
  const [incoming, setIncoming] = useState<number>(0);
  const [spending, setSpending] = useState<number>(0);
  const [paidBills, setPaidBills] = useState<number>(0);
  const [bills, setBills] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const currentMonth = month();
  const refreshReducers = useSelector((state: any) => state.refreshReducers);

  const init = useCallback(async () => {
    setIsLoading(true);
    await Promise.all([getBill(currentMonth), getIncoming(currentMonth)])
      .then((res) => {
        let currentBills = 0;
        setSpending(res[0].data.Total ?? 0);
        setIncoming(res[1].data.Total ?? 0);
        setBills(res[0].data.result.length ?? 0);
        res[0]?.data.result.map(
          (bill: rowItems) => bill.isChecked && currentBills++
        );
        setPaidBills(currentBills);
        setProfit(res[1]?.data.Total - res[0]?.data.Total);
      })
      .catch(() => setIsLoading(false))
      .finally(() => {
        setIsLoading(false);
        dispatch(RefreshSlice.actions.IS_REFRESHING(false));
        dispatch(RefreshSlice.actions.REFRESH_ALL(false));
      });
  }, []);

  useEffect(() => {
    init();
  }, [refreshReducers.refreshAll]);

  useEffect(() => {
    if (refreshReducers.refreshing) {
      init();
    }
  }, [refreshReducers.refreshing]);

  return (
    <SafeAreaCustomized isLoading={isLoading} canRefresh>
      <View style={WalletStyles.container}>
        <Text style={WalletStyles.title}>Carteira</Text>
        <AnimatedCard
          cardTitle="Renda"
          cardValue={incoming?.toString()}
          goTo="Renda"
          isMoney
        />
        <AnimatedCard
          cardTitle="Gastos"
          isNegative
          cardValue={spending?.toString()}
          goTo="Bills"
          isMoney
        />
        <AnimatedCard
          cardTitle="Contas"
          isNegative
          cardValue={bills?.toString()}
          goTo="Bills"
        />
        <AnimatedCard
          cardTitle="Contas Pagas"
          cardValue={paidBills?.toString()}
          goTo="Bills"
        />
        <AnimatedCard
          cardTitle="Sobras"
          isMoney
          cardValue={profit?.toString()}
          goTo="Profit"
        />
      </View>
    </SafeAreaCustomized>
  );
};

export default Wallet;
