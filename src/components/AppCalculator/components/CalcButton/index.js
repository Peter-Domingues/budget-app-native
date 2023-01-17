import React from "react";
import { View, Text } from "react-native";
import { Button, IconButton } from "react-native-paper";
import CalcButtonStyles from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Colors from "../../../../themes/colors";

const CalcButton = ({ children, onClick, isInput, copyResult }) => {
  const ehNum = (val) => {
    if (!isNaN(val) || val === "C" || val === ".") {
      return true;
    }
    return false;
  };

  const ehIgual = (val) => {
    if (val === "=") {
      return true;
    }
    return false;
  };

  return (
    <>
      {isInput ? (
        <View style={CalcButtonStyles.input}>
          <IconButton
            icon={() => (
              <MaterialIcons
                name="content-copy"
                size={26}
                color={Colors.white}
              />
            )}
            size={20}
            onPress={copyResult}
            style={CalcButtonStyles.iconCopy}
          />
          <Text style={CalcButtonStyles.inputText}>{children}</Text>
        </View>
      ) : (
        <Button
          textColor={
            ehIgual(children)
              ? "#000000"
              : !ehNum(children)
              ? "#fff"
              : "#35794b"
          }
          buttonColor={
            ehIgual(children) ? "#A6CE95" : !ehNum(children) ? "#35794b" : null
          }
          style={ehIgual(children) ? { width: "100%" } : { width: "25%" }}
          labelStyle={CalcButtonStyles.buttonText}
          contentStyle={CalcButtonStyles.button}
          onPress={() => onClick(children)}
        >
          {children}
        </Button>
      )}
    </>
  );
};

export default CalcButton;