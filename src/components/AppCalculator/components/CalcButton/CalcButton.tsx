import React from "react";
import { View, Text } from "react-native";
import { Button, IconButton } from "react-native-paper";
import CalcButtonStyles from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Colors from "../../../../themes/colors";
interface CalcButtonProps {
  children: any;
  onClick?: any;
  isInput?: boolean;
  copyResult?: any;
  isRemoveOne?: boolean;
}

const CalcButton: React.FC<CalcButtonProps> = ({
  children,
  onClick,
  isInput,
  copyResult,
  isRemoveOne,
}) => {
  const ehNum = (val: string | number) => {
    if (!isNaN(val as number) || val === "C" || val === ".") {
      return true;
    }
    return false;
  };

  const ehIgual = (val: string | number) => {
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
            accessibilityLabelledBy={undefined}
            accessibilityLanguage={undefined}
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
            ehIgual(children) || isRemoveOne
              ? "#A6CE95"
              : !ehNum(children)
              ? "#35794b"
              : undefined
          }
          style={
            ehIgual(children) || isRemoveOne
              ? { width: "100%" }
              : { width: "25%" }
          }
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
