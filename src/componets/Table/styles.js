import { StyleSheet } from "react-native";
import Colors from "../../themes/colors";

const TableStyles = StyleSheet.create({
  maxScroll: {
    maxHeight: "70%",
    width: "100%",
  },
  header: {
    backgroundColor: Colors.green100,
  },
  headerText: {
    color: "white",
  },
});

export default TableStyles;
