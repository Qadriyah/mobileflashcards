import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    shadowColor: Colors.GREY,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 100,
  },
  title: {
    color: Colors.BLACK,
    fontSize: 20,
    fontWeight: "700",
  },
  counter: {
    color: Colors.BLACK,
  },
});

export default styles;
