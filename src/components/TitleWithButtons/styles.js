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
    color: Colors.green100,
    fontSize: 20,
  },
  emptyButton: {
    width: "10%",
  },
});

export default TitleWithButtonsStyles;
