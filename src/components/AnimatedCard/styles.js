import { StyleSheet } from "react-native";
import Colors from "../../themes/colors";

const AnimatedCardStyles = StyleSheet.create({
  greenText: {
    paddingLeft: 10,
    color: Colors.green100,
  },
  redText: {
    paddingLeft: 10,
    color: Colors.red,
  },
  whiteBox: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.white,
    display: "flex",
    justifyContent: "center",
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    width: 300,
  },
  whiteBoxAfter: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.white,
    display: "flex",
    justifyContent: "center",
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    width: 400,
    alignItems: "center",
  },
  greenBox: {
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: Colors.green100,
    display: "flex",
    justifyContent: "center",
    borderBottomLeftRadius: 10,
  },
  whiteText: {
    color: Colors.white,
    alignSelf: "center",
  },
  greenBoxAfter: { width: 0, display: "none" },
  animatedBox: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: Colors.green100,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: "hidden",
    width: "100%",
  },
});

export default AnimatedCardStyles;
