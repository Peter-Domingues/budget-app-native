import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Colors from "../themes/colors";

export const convertType = (type: string) => {
  return type == "incoming"
    ? {
        title: "Renda",
        icon: (
          <MaterialIcons
            name="attach-money"
            color={Colors.green100}
            size={26}
            accessibilityLabelledBy={undefined}
            accessibilityLanguage={undefined}
          />
        ),
      }
    : {
        title: "Conta",
        icon: (
          <MaterialIcons
            name="money-off"
            color={Colors.red}
            size={26}
            accessibilityLabelledBy={undefined}
            accessibilityLanguage={undefined}
          />
        ),
      };
};
