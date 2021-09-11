import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    backgroundColor: Colors.GREEN,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  label: {
    color: Colors.WHITE,
    fontSize: 18,
  },
});

export default styles;
