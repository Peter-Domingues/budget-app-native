import React from "react";
import { Text, View } from "react-native";
import { IconButton, Snackbar } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Colors from "../../themes/colors";
import SnackbarCustomStyles from "./styles";

interface SnackbarCustomProps {
  duration?: number;
  onDismissSnackBar: any;
  showSnackbar: boolean;
  handleCloseSnackbar: any;
  snackBarText: string;
  snackBarType: string;
}

const SnackbarCustom: React.FC<SnackbarCustomProps> = ({
  showSnackbar,
  onDismissSnackBar,
  handleCloseSnackbar,
  snackBarText,
  snackBarType,
  duration,
}) => {
  return (
    <Snackbar
      visible={showSnackbar}
      onDismiss={onDismissSnackBar}
      style={
        snackBarType === "success"
          ? SnackbarCustomStyles.successSnackbar
          : snackBarType === "error"
          ? SnackbarCustomStyles.errorSnackbar
          : SnackbarCustomStyles.defaultSnackbar
      }
      duration={duration || 8000}
    >
      <View style={SnackbarCustomStyles.container}>
        <View style={SnackbarCustomStyles.snackbarText}>
          <MaterialIcons
            name={
              snackBarType === "success"
                ? "check"
                : snackBarType === "error"
                ? "warning"
                : ""
            }
            color={Colors.white}
            size={20}
            accessibilityLabelledBy={undefined}
            accessibilityLanguage={undefined}
            style={SnackbarCustomStyles.leftIcon}
          />
          <Text style={SnackbarCustomStyles.textStyle}>{snackBarText}</Text>
        </View>

        <IconButton
          icon={() => (
            <MaterialIcons
              name="close"
              color={Colors.white}
              size={20}
              accessibilityLabelledBy={undefined}
              accessibilityLanguage={undefined}
            />
          )}
          onPress={handleCloseSnackbar}
          accessibilityLabelledBy={undefined}
          accessibilityLanguage={undefined}
          style={SnackbarCustomStyles.iconButton}
          size={10}
        />
      </View>
    </Snackbar>
  );
};

export default SnackbarCustom;
