import React from "react";
import { Text } from "react-native";
import Animated from "react-native-reanimated";

import styles from "../../screens/QuizScreen/styles";

const QuizQuestion = ({ question, animatedStyles }) => {
  return (
    <Animated.View style={[styles.child, animatedStyles]}>
      <Text style={styles.text}>{question}</Text>
    </Animated.View>
  );
};

export default QuizQuestion;
