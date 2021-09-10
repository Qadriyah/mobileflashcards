import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    shadowColor: Colors.GREY,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: Colors.WHITE,
    width: "100%",
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    height: 60,
    marginBottom: 10,
    justifyContent: "center",
  },
  label: {
    padding: 20,
    fontSize: 30,
    textAlign: "center",
  },
});

export default styles;
