import { StyleSheet } from "react-native";
import Colors from "../../themes/colors";

const CalculatorPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    color: Colors.green100,
    fontSize: 20,
    paddingTop: 20,
  },
});

export default CalculatorPageStyles;
