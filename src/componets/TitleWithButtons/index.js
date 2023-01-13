import * as React from "react";
import { View, Text } from "react-native";
import TitleWithButtonsStyles from "./styles";

const TitleWithButtons = (props) => {
  return (
    <View style={TitleWithButtonsStyles.container}>
      <Text style={TitleWithButtonsStyles.title}>{props.title}</Text>
    </View>
  );
};

export default TitleWithButtons;
