import React, { useState, useEffect } from "react";
import SafeAreaCustomized from "../../components/SafeAreaCustomized";
import { IconButton, TextInput } from "react-native-paper";
import { View } from "react-native";
import TitleWithButtons from "../../components/TitleWithButtons";
import PigIcon from "../../svg/Pig";
import BrokenPig from "../../svg/BrokenPig";
import CurrencyInput from "react-native-currency-input";

const Profit = () => {
  const [savings, setSavings] = useState();
  const [temporarySavings, setTemporarySavings] = useState(savings);
  const [isEditing, setIsEditing] = useState(false);
  const [pigSize, setPigSize] = useState(20);

  const percentage = (percent, totalValue) => {
    const toPositive = Math.abs(totalValue);
    const result = (percent * toPositive) / 100;

    if (result < 20) {
      return 20;
    } else if (result > 300) {
      return 300;
    } else return parseInt(result);
  };

  const init = () => {
    setSavings(2);
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

  return (
    <SafeAreaCustomized>
      <TitleWithButtons title="Lucro" isEdit />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
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
        />
        <CurrencyInput
          value={temporarySavings}
          onChangeValue={(e) => setTemporarySavings(e)}
          prefix="R$"
          delimiter="."
          separator=","
          label="Valor"
          precision={2}
          renderTextInput={(textInputProps) => (
            <TextInput
              {...textInputProps}
              style={{ backgroundColor: "transparent" }}
            />
          )}
        />
      </View>
    </SafeAreaCustomized>
  );
};

export default Profit;
