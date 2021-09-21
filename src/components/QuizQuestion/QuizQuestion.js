import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";

import Button from "../Button/Button";
import styles from "../../screens/QuizScreen/styles";

const QuizQuestion = ({ question, animatedStyles }) => {
  return (
    <Animated.View style={[styles.child, animatedStyles]}>
      <Text style={styles.text}>{question}</Text>
    </Animated.View>
  );
};

export default QuizQuestion;
