import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: Colors.BLACK,
    fontSize: 32,
    fontWeight: "700",
  },
  counter: {
    color: Colors.BLACK,
    fontSize: 24,
    marginTop: 5,
  },
  buttonContainer: {
    width: "100%",
  },
  cardContainer: {
    alignItems: "center",
    padding: 40,
  },
});

export default styles;
