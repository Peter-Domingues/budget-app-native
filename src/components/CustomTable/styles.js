import { StyleSheet } from "react-native";
import Colors from "../../themes/colors";

const TableStyles = StyleSheet.create({
  greenRow: {
    backgroundColor: Colors.green100,
    height: 48,
    display: "flex",
    flexDirection: "row",
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: { paddingLeft: 8 },
  maxHeightTable: { maxHeight: "85%" },
  maxScroll: {
    width: "100%",
    backgroundColor: Colors.white,
  },
  headerText: {
    color: "white",
  },
  crossedTitle: {
    textDecorationLine: "line-through",
  },
  fontView: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    minHeight: 48,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingRight: 5,
  },
  container: {
    width: "100%",
    maxHeight: "85%",
    backgroundColor: Colors.white,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  greenText: {
    color: Colors.green100,
  },
  redText: {
    color: Colors.red,
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  bottomWhiteCard: {
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: Colors.white,
    height: 48,
    padding: 10,
    justifyContent: "center",
    minWidth: 80,
  },
  centerText: { padding: 10, justifyContent: "center" },
  whiteText: { color: Colors.white },
  rowItem: { color: "white", padding: 10 },
  cell: {
    padding: 7,
    overflow: "hidden",
    wordBreak: "break-word",
    flexWrap: "wrap",
  },
  icon: { margin: 0 },
});

export default TableStyles;
