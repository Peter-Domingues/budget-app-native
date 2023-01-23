import React, { useState } from "react";
import { View } from "react-native";
import CalcButton from "./components/CalcButton";
import * as math from "mathjs";
import AppCalculatorSyles from "./styles";
import * as Clipboard from "expo-clipboard";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Colors from "../../themes/colors";

const AppCalculator = () => {
  const arrOperacoes = ["*", "/", "+", ".", "-"];

  const [input, setInput] = useState("");

  const insereNum = (val: string | number) => {
    setInput(input + val);
  };
  const eraseNum = () => {
    const newInput = input.substring(0, input.length - 1);
    setInput(newInput);
  };

  const insereOperacao = (val: string | number) => {
    if (
      input === "" ||
      (arrOperacoes.includes(input[input.length - 1]) &&
        arrOperacoes.includes(val as string))
    ) {
      return;
    } else {
      setInput(input + val);
    }
  };

  const calcular = () => {
    if (input === "" || arrOperacoes.includes(input[input.length - 1])) {
      return input;
    } else {
      const result = math.evaluate(input);
      setInput(result.toString());
    }
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(input);
  };

  return (
    <View style={AppCalculatorSyles.calcWrapper}>
      <View style={AppCalculatorSyles.line}>
        <View style={AppCalculatorSyles.input}>
          <CalcButton isInput copyResult={copyToClipboard}>
            {input}
          </CalcButton>
        </View>

        <View style={AppCalculatorSyles.eraseButton}>
          <CalcButton onClick={eraseNum} isRemoveOne>
            <MaterialIcons name="arrow-back" color={Colors.white} size={26} />
          </CalcButton>
        </View>
      </View>
      <View style={AppCalculatorSyles.line}>
        <CalcButton onClick={insereNum}>7</CalcButton>
        <CalcButton onClick={insereNum}>8</CalcButton>
        <CalcButton onClick={insereNum}>9</CalcButton>
        <CalcButton onClick={insereOperacao}>/</CalcButton>
      </View>
      <View style={AppCalculatorSyles.line}>
        <CalcButton onClick={insereNum}>4</CalcButton>
        <CalcButton onClick={insereNum}>5</CalcButton>
        <CalcButton onClick={insereNum}>6</CalcButton>
        <CalcButton onClick={insereOperacao}>*</CalcButton>
      </View>
      <View style={AppCalculatorSyles.line}>
        <CalcButton onClick={insereNum}>1</CalcButton>
        <CalcButton onClick={insereNum}>2</CalcButton>
        <CalcButton onClick={insereNum}>3</CalcButton>
        <CalcButton onClick={insereOperacao}>+</CalcButton>
      </View>
      <View style={AppCalculatorSyles.line}>
        <CalcButton onClick={insereOperacao}>.</CalcButton>
        <CalcButton onClick={insereNum}>0</CalcButton>
        <CalcButton onClick={() => setInput("")}>C</CalcButton>
        <CalcButton onClick={insereOperacao}>-</CalcButton>
      </View>
      <View style={AppCalculatorSyles.line}>
        <CalcButton onClick={calcular}>=</CalcButton>
      </View>
    </View>
  );
};

export default AppCalculator;
