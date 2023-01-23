import { StyleSheet } from "react-native";
import Colors from "../../themes/colors";

const AccordionCardStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green100,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: 20,
  },
  whiteBox: {
    backgroundColor: "white",
    flex: 1,
    borderBottomLeftRadius: 10,
    padding: 10,
    display: "flex",
    justifyContent: "center",
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
  item: {
    margin: 8,
  },
});

export default AccordionCardStyles;
