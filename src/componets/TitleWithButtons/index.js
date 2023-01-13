import * as React from "react";
import { View, Text } from "react-native";
import TitleWithButtonsStyles from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Colors from "../../themes/colors";

const TitleWithButtons = (props) => {
  return (
    <View style={TitleWithButtonsStyles.container}>
      <MaterialIcons name="delete-forever" color={Colors.red} size={26} />
      <Text style={TitleWithButtonsStyles.title}>{props.title}</Text>
      <MaterialIcons name="add" color={Colors.green100} size={26} />
    </View>
  );
};

export default TitleWithButtons;
