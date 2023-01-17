import { StyleSheet } from "react-native";

const CalcButtonStyles = StyleSheet.create({
  botaoWrapper: {
    color: "#35794b",
  },

  input: {
    height: 48,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
    backgroundColor: "#234214",
    padding: 1,
    outline: "1px solid #bad9ad",
    borderRadius: 4,
    marginBottom: 2,
  },
  inputText: {
    letterSpacing: 1,
    fontSize: 15,
    color: "#fff",
    textAlign: "right",
    marginLeft: 5,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 1.4,
    height: 56,
  },
});

export default CalcButtonStyles;
