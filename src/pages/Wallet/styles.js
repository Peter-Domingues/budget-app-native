import { StyleSheet } from "react-native";
import Colors from "../../themes/colors";

const WalletStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    textAlign: "center",
    color: Colors.green100,
    fontSize: 20,
  },
});

export default WalletStyles;
