import React from "react";
import { Dimensions, View, Text } from "react-native";
import Svg, { Circle } from "react-native-svg";

import Colors from "../../utils/colors";
import styles from "./styles";

const { width } = Dimensions.get("window");
const diameter = width - 100;
const stroke = 40;
const radius = (diameter - stroke) / 2;
const circumference = 2 * Math.PI * radius;

const ProgressCircle = ({ score }) => {
  const percentage = score / 100;

  return (
    <View style={styles.container}>
      <Text style={styles.progressText}>{`${score}%`}</Text>
      <Svg width={diameter} height={diameter} style={{ position: "absolute" }}>
        <Circle
          stroke={Colors.GREY}
          fill="none"
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          strokeWidth={stroke}
        />
        <Circle
          stroke={Colors.GREEN}
          fill="none"
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - percentage)}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
};

export default ProgressCircle;
