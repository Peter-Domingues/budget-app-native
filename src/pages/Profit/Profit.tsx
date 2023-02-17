import React, { useState, useEffect, useRef } from "react";
import SafeAreaCustomized from "../../components/SafeAreaCustomized";
import { IconButton, TextInput } from "react-native-paper";
import { View } from "react-native";
import TitleWithButtons from "../../components/TitleWithButtons";
import PigIcon from "../../svg/Pig";
import BrokenPig from "../../svg/BrokenPig";
import CurrencyInput from "react-native-currency-input";
import SafeAreaCustomizedSlice from "../../store/reducers/SafeAreaCustomizedReducer";
import { useDispatch } from "react-redux";
import { getHistory } from "../../api/HistoryApi";
import { postBill } from "../../api/BillsApi";
import { postIncoming } from "../../api/IncomingApi";
import ProfitStyles from "./styles";

const Profit = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [savings, setSavings] = useState<number>(0);
  const [temporarySavings, setTemporarySavings] = useState<number>(savings);
  const [newSavings, setNewSavings] = useState<number>(savings);
  const [pigSize, setPigSize] = useState(20);
  const refInput = useRef<any>(null);

  const percentage = (percent: number, totalValue: number) => {
    const toPositive = Math.abs(totalValue);
    const result: number = (percent * toPositive) / 100;

    if (result < 20) {
      return 20;
    } else if (result > 300) {
      return 300;
    } else return result;
  };

  const init = async () => {
    setIsLoading(true);
    await getHistory()
      .then((res) => {
        setSavings(res.data.YearProfit);
        console.log(res);
      })
      .finally(() => {
        dispatch(SafeAreaCustomizedSlice.actions.IS_REFRESHING(false));
        setIsLoading(false);
      });
  };

  const editIncoming = async () => {
    if (savings > temporarySavings) {
      const payload = {
        font: "Indefinida",
        amount: savings - temporarySavings,
        dueDate: new Date(),
        isChecked: true,
        type: "bill",
      };

      await postBill(payload)
        .then(() => {})
        .finally(() => {})
        .catch(() => {});
    } else {
      const payload = {
        font: "Indefinida",
        amount: temporarySavings - savings,
        dueDate: new Date(),
        isChecked: true,
        type: "incoming",
      };

      await postIncoming(payload)
        .then(() => {})
        .finally(() => {})
        .catch(() => {});
    }
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    setTemporarySavings(savings);
  }, [savings]);

  useEffect(() => {
    setPigSize(percentage(10, temporarySavings));
  }, [temporarySavings]);

  useEffect(() => {
    editIncoming();
  }, [newSavings]);

  return (
    <SafeAreaCustomized isLoading={isLoading} canRefresh>
      <TitleWithButtons
        title="Lucro"
        isEdit
        onAdd={() => {
          if (refInput.current) {
            refInput.current.focus();
          }
        }}
        activateDelete={false}
        onDelete={undefined}
      />
      <View style={ProfitStyles.container}>
        <IconButton
          size={pigSize || 20}
          onPress={() =>
            setTemporarySavings(
              temporarySavings < 0
                ? temporarySavings - 123
                : temporarySavings + 123
            )
          }
          style={{ borderRadius: 20 }}
          icon={() => (temporarySavings < 0 ? <BrokenPig /> : <PigIcon />)}
          accessibilityLabelledBy={undefined}
          accessibilityLanguage={undefined}
        />
        <CurrencyInput
          value={temporarySavings}
          onChangeValue={(e) => e && setTemporarySavings(e)}
          prefix="R$"
          delimiter="."
          separator=","
          precision={2}
          ref={refInput}
          onEndEditing={() => setNewSavings(temporarySavings)}
          renderTextInput={(textInputProps) => (
            // @ts-ignore
            <TextInput
              accessibilityLabelledBy={undefined}
              accessibilityLanguage={undefined}
              ref={refInput}
              {...textInputProps}
              style={{ backgroundColor: "transparent" }}
              label="Total"
            />
          )}
        />
      </View>
    </SafeAreaCustomized>
  );
};

export default Profit;
