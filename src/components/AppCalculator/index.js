import React, { useState } from "react";
import { View } from "react-native";
import CalcButton from "./components/CalcButton";
import * as math from "mathjs";
import AppCalculatorSyles from "./styles";
import * as Clipboard from "expo-clipboard";

const Calculator = () => {
  const arrOperacoes = ["*", "/", "+", ".", "-"];

  const [input, setInput] = useState("");

  function insereNum(val) {
    setInput(input + val);
  }

  function insereOperacao(val) {
    if (
      input === "" ||
      (arrOperacoes.includes(input[input.length - 1]) &&
        arrOperacoes.includes(val))
    ) {
      return;
    } else {
      setInput(input + val);
    }
  }

  function calcular() {
    if (input === "" || arrOperacoes.includes(input[input.length - 1])) {
      return input;
    } else {
      const result = math.evaluate(input);
      setInput(result.toString());
    }
  }

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(input);
  };

  return (
    <View style={AppCalculatorSyles.calcWrapper}>
      <CalcButton isInput copyResult={copyToClipboard}>
        {input}
      </CalcButton>
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

export default Calculator;
