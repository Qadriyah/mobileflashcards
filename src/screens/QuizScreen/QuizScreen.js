import React from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
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
import { markGuess, unmarkAllQuestions } from "../../redux/actions/deck";
import styles from "./styles";
import ProgressCircle from "../../components/ProgressCircle/ProgressCircle";
import {
  allowsNotificationsAsync,
  clearNotifications,
  createNotification,
} from "../../utils/notifications";

const QuizScreen = ({ navigation, route: { params } }) => {
  const id = params ? params.id : "";
  const [toggle, setToggle] = React.useState(0);
  const flipCard = useSharedValue(0);
  const transition = useDerivedValue(() => withSpring(flipCard.value));
  const dispatch = useDispatch();
  const didMountRef = React.useRef(false);

  React.useEffect(() => {
    flipCard.value = toggle ? 180 : 0;
    if (didMountRef.current) {
      if (deck && deck.totalMarked === deck.totalQuestions) {
        (async () => {
          const status = await allowsNotificationsAsync();
          if (status) {
            await clearNotifications();
            await createNotification();
          }
        })();
      }
    } else {
      didMountRef.current = true;
    }
  }, [toggle]);

  const deck = useSelector(({ decks }) => {
    return decks && decks.decks && Object.keys(decks.decks).length > 0
      ? {
          id,
          title: decks.decks[id].title,
          unMarked: decks.decks[id].questions.filter(
            ({ marked }) => marked === undefined
          ),
          marked: decks.decks[id].questions.filter(
            ({ marked }) => marked !== undefined
          ),
          totalQuestions: decks.decks[id].questions.length,
          totalMarked: decks.decks[id].questions.filter(
            ({ marked }) => marked !== undefined
          ).length,
          correct: decks.decks[id].questions.filter(
            ({ marked }) => marked && marked === "Correct"
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

  const onFlipCard = () => {
    setToggle(!toggle);
  };

  const markGuessHandler = ({ label }) => {
    dispatch(
      markGuess({
        selectedOption: label,
        deckId: id,
        questionId: deck.unMarked[0].id,
      })
    ).then(() => {
      setToggle(false);
    });
  };

  const goBack = () => {
    navigation.replace("Deck");
  };

  const startOver = () => {
    dispatch(unmarkAllQuestions({ deckId: id }));
  };

  if (deck && deck.unMarked && deck.unMarked.length === 0) {
    const score =
      deck.correct && deck.totalQuestions
        ? Math.floor((deck.correct / deck.totalQuestions) * 100)
        : 0;
    return (
      <>
        <View style={styles.progressContainer}>
          <View>
            <Text style={styles.bigText}>
              {`${deck.totalMarked}/${deck.totalQuestions}`}
            </Text>
          </View>
          <ProgressCircle score={score} />
        </View>
        <View style={styles.bottom}>
          <Button
            label="Restart Quiz"
            onPress={startOver}
            style={styles.correctButton}
          />
          <Button
            label="Back to Deck"
            onPress={goBack}
            style={{
              ...styles.correctButton,
              ...styles.wrongButton,
            }}
          />
        </View>
      </>
    );
  }

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
            answer={deck && deck.unMarked ? deck.unMarked[0].answer : ""}
            animatedStyles={backAnimatedStyle}
          />
          <QuizQuestion
            question={deck && deck.unMarked ? deck.unMarked[0].question : ""}
            animatedStyles={frontAnimatedStyle}
          />
        </View>
        <View>
          <Button
            label={`${toggle ? "View Question" : "View Answer"}`}
            onPress={onFlipCard}
            style={styles.button}
          />
        </View>
      </View>
      {toggle ? (
        <View style={styles.bottom}>
          <Button
            label="Correct"
            onPress={markGuessHandler}
            style={styles.correctButton}
          />
          <Button
            label="Incorrect"
            onPress={markGuessHandler}
            style={{
              ...styles.correctButton,
              ...styles.wrongButton,
            }}
          />
        </View>
      ) : null}
    </>
  );
};

export default QuizScreen;
