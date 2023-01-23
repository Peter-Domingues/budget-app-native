import { StyleSheet } from "react-native";
import Colors from "../../../../themes/colors";

const CalcButtonStyles = StyleSheet.create({
  input: {
    height: 70,
    justifyContent: "space-between",
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    backgroundColor: "#234214",
    padding: 1,
    outline: "1px solid #bad9ad",
    borderRadius: 4,
    width: "100%",
    flexDirection: "row",
  },
  inputText: {
    letterSpacing: 1,
    fontSize: 20,
    color: "#fff",
    textAlign: "right",
    marginRight: 15,
    justifyContent: "flex-end",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
  },
  buttonText: {
    fontSize: 20,
  },
  iconCopy: {
    alignSelf: "flex-start",
  },
});

export default CalcButtonStyles;
