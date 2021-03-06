import React from "react";
import { Text } from "react-native";
import Animated from "react-native-reanimated";
import PropTypes from "prop-types";

import styles from "../../screens/QuizScreen/styles";
import Colors from "../../utils/colors";

const QuizAnswer = ({ answer, animatedStyles }) => {
  return (
    <Animated.View style={[styles.child, styles.answer, animatedStyles]}>
      <Text style={[styles.text, { color: Colors.BLACK }]}>{answer}</Text>
    </Animated.View>
  );
};

QuizAnswer.propTypes = {
  answer: PropTypes.string.isRequired,
  animatedStyles: PropTypes.shape({}),
};

export default QuizAnswer;
