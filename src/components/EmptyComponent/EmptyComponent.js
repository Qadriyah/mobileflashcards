import React from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../utils/colors";
import styles from "./styles";

const EmptyComponent = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="hourglass-empty" size={90} color={Colors.GREY} />
      <Text style={styles.label}>No data to display</Text>
    </View>
  );
};

export default EmptyComponent;
