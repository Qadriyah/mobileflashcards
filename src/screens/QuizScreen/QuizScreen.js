import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import {
  useSharedValue,
  useDerivedValue,
  withSpring,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

import Button from "../../components/Button/Button";
import QuizAnswer from "../../components/QuizAnswer/QuizAnswer";
import QuizQuestion from "../../components/QuizQuestion/QuizQuestion";

import styles from "./styles";

const QuizScreen = ({ navigation, route: { params } }) => {
  const title = params ? params.title : "";
  const [toggle, setToggle] = React.useState(0);
  const flipCard = useSharedValue(0);
  const transition = useDerivedValue(() => withSpring(flipCard.value));

  React.useEffect(() => {
    flipCard.value = toggle ? 180 : 0;
  }, [toggle]);

  const deck = useSelector(({ decks }) => {
    return decks && decks.decks
      ? {
          title,
          unMarked: decks.decks[title].questions.filter(
            ({ marked }) => marked === undefined
          ),
          marked: decks.decks[title].questions.filter(
            ({ marked }) => marked !== undefined
          ),
          totalQuestions: decks.decks[title].questions.length,
          totalMarked: decks.decks[title].questions.filter(
            ({ marked }) => marked !== undefined
          ).length,
        }
      : {};
  });

  const frontAnimatedStyle = useAnimatedStyle(() => {
    const frontFlip = interpolate(
      transition.value,
      [0, 180],
      [0, 180],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ rotateY: `${frontFlip}deg` }],
    };
  });

  const backAnimatedStyle = useAnimatedStyle(() => {
    const backFlip = interpolate(
      transition.value,
      [0, 180],
      [180, 360],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ rotateY: `${backFlip}deg` }],
    };
  });

  const onPress = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.bigText}>
            {`${deck.totalMarked}/${deck.totalQuestions}`}
          </Text>
        </View>
        <View style={styles.parent}>
          <QuizAnswer
            answer={deck.unMarked[0].answer}
            animatedStyles={backAnimatedStyle}
          />
          <QuizQuestion
            question={deck.unMarked[0].question}
            onPress={onPress}
            animatedStyles={frontAnimatedStyle}
          />
        </View>
        <View>
          <Button
            label={`${toggle ? "View Question" : "View Answer"}`}
            onPress={onPress}
            style={styles.button}
          />
        </View>
      </View>
      {toggle ? (
        <View style={styles.bottom}>
          <Button
            label="Correct"
            onPress={onPress}
            style={styles.correctButton}
          />
          <Button
            label="Incorrect"
            onPress={onPress}
            style={{ ...styles.correctButton, ...styles.wrongButton }}
          />
        </View>
      ) : null}
    </>
  );
};

export default QuizScreen;
