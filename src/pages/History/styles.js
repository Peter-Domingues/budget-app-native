import { StyleSheet } from "react-native";
import Colors from "../../themes/colors";

const HistoryStyles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  title: {
    textAlign: "center",
    color: Colors.green100,
    fontSize: 20,
  },
  whiteTitle: {
    color: Colors.white,
    fontSize: 15,
    margin: 8,
  },
  greenTitle: {
    color: Colors.green100,
    fontSize: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  multiline: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    fontSize: 14,
  },
  item: {
    margin: 8,
  },
  child: {
    paddingLeft: 64,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
});

export default HistoryStyles;
