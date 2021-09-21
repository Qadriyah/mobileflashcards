import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // justifyContent: "space-between",
  },
  bigText: {
    color: Colors.BLACK,
    fontSize: 32,
    padding: 20,
    textAlign: "center",
  },
  text: {
    color: Colors.WHITE,
    fontSize: 32,
    textAlign: "center",
  },
  parent: {
    position: "relative",
    height: 250,
    borderRadius: 10,
  },
  child: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 20,
    height: 250,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Colors.GREY,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: Colors.GREEN,
    backfaceVisibility: "hidden",
  },
  answer: {
    backgroundColor: Colors.WHITE,
  },
  button: {
    backgroundColor: Colors.WHITE,
    color: Colors.GREEN,
    marginTop: 20,
    borderColor: Colors.GREEN,
    borderWidth: 1,
  },
  bottom: {
    bottom: 0,
    flexDirection: "row",
  },
  correctButton: {
    backgroundColor: Colors.WHITE,
    color: Colors.GREEN,
    borderColor: Colors.GREEN,
    borderWidth: 1,
    borderRadius: 0,
    flex: 1,
    bottom: -10,
  },
  wrongButton: {
    backgroundColor: Colors.GREEN,
    color: Colors.WHITE,
  },
});

export default styles;
