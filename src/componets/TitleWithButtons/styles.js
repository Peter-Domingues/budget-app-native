import { StyleSheet } from "react-native";
import Colors from "../../themes/colors";

const TitleWithButtonsStyles = StyleSheet.create({
  container: {
    paddingBottom: 15,
    paddingTop: 15,
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
    color: "#35794b",
    fontSize: 20,
  },
});

export default TitleWithButtonsStyles;
