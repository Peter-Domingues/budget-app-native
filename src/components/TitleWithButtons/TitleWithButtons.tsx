import * as React from "react";
import { View, Text } from "react-native";
import TitleWithButtonsStyles from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Colors from "../../themes/colors";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

interface TitleWithButtonsProps {
  isEdit?: boolean;
  activateDelete?: boolean;
  title: string;
  onDelete?: any;
  onAdd?: any;
  hasBackButton?: boolean;
  hideAdd?: boolean;
}

const TitleWithButtons: React.FC<TitleWithButtonsProps> = ({
  isEdit = false,
  activateDelete,
  title,
  onDelete,
  onAdd,
  hasBackButton = false,
  hideAdd = false,
}) => {
  const navigation = useNavigation();

  return (
    <View style={TitleWithButtonsStyles.container}>
      {isEdit ? (
        <View style={TitleWithButtonsStyles.emptyButton} />
      ) : hasBackButton ? (
        <IconButton
          icon={() => (
            <MaterialIcons name={"arrow-back"} color={Colors.red} size={26} />
          )}
          size={20}
          onPress={() => navigation.goBack()}
          accessibilityLabelledBy={undefined}
          accessibilityLanguage={undefined}
        />
      ) : (
        <IconButton
          icon={() => (
            <MaterialIcons
              name={activateDelete ? "close" : "delete-forever"}
              color={Colors.red}
              size={26}
            />
          )}
          size={20}
          onPress={onDelete}
          accessibilityLabelledBy={undefined}
          accessibilityLanguage={undefined}
        />
      )}
      <Text style={TitleWithButtonsStyles.title}>{title}</Text>
      {hideAdd ? (
        <View style={TitleWithButtonsStyles.emptyButton} />
      ) : (
        <IconButton
          icon={() => (
            <MaterialIcons
              name={isEdit ? "edit" : "add"}
              color={Colors.green100}
              size={26}
            />
          )}
          size={20}
          onPress={onAdd}
          accessibilityLabelledBy={undefined}
          accessibilityLanguage={undefined}
        />
      )}
    </View>
  );
};

export default TitleWithButtons;
