import { StyleSheet } from "react-native";

const AppCalculatorSyles = StyleSheet.create({
  calcWrapper: {
    borderRadius: 20,
  },
  line: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingTop: 10,
  },
  input: { width: "73%" },
  eraseButton: { width: "27%", paddingLeft: 10 },
});

export default AppCalculatorSyles;
