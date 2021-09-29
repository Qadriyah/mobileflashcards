import React from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../utils/colors";
import styles from "./styles";

const EmptyComponent = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="hourglass-empty" size={80} color={Colors.GREY} />
      <Text style={styles.label}>No decks to display</Text>
    </View>
  );
};

export default EmptyComponent;
