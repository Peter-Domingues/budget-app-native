import * as React from "react";
import { View, Text } from "react-native";
import TitleWithButtonsStyles from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Colors from "../../themes/colors";
import { IconButton } from "react-native-paper";

const TitleWithButtons = (props) => {
  return (
    <View style={TitleWithButtonsStyles.container}>
      {props.isEdit ? (
        <View style={TitleWithButtonsStyles.emptyButton} />
      ) : (
        <IconButton
          icon={() => (
            <MaterialIcons
              name={props.activateDelete ? "close" : "delete-forever"}
              color={Colors.red}
              size={26}
            />
          )}
          size={20}
          onPress={props.onDelete}
        />
      )}
      <Text style={TitleWithButtonsStyles.title}>{props.title}</Text>
      <IconButton
        icon={() => (
          <MaterialIcons
            name={props.isEdit ? "edit" : "add"}
            color={Colors.green100}
            size={26}
          />
        )}
        size={20}
        onPress={props.onAdd}
      />
    </View>
  );
};

export default TitleWithButtons;
