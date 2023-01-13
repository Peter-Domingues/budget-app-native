import { StyleSheet } from "react-native";
import Colors from "../../themes/colors";

const TitleWithButtonsStyles = StyleSheet.create({
  container: {
    paddingBottom: "15px",
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
    color: " #35794b",
    fontSize: "20px",
  },
});

export default TitleWithButtonsStyles;
