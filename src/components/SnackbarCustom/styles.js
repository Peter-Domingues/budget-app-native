import { StyleSheet } from "react-native";
import Colors from "../../themes/colors";

const SnackbarCustomStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    margin: 0,
  },
  snackbarText: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  successSnackbar: {
    backgroundColor: Colors.green100,
  },
  errorSnackbar: {
    backgroundColor: Colors.red,
  },
  defaultSnackbar: {
    backgroundColor: "gray",
  },
  leftIcon: { paddingRight: 5 },
  textStyle: { color: Colors.white },
  iconButton: { margin: 0 },
});

export default SnackbarCustomStyles;
