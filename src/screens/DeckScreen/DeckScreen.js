import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import styles from "./styles";
import Button from "../../components/Button/Button";
import Colors from "../../utils/colors";

const DeckScreen = ({ navigation, route: { params } }) => {
  const id = params ? params.id : "";
  const deck = useSelector(({ decks }) => {
    return decks && decks.decks ? decks.decks[id] : {};
  });

  const onAddCard = () => {
    navigation.navigate("Card", { id });
  };

  const onStartQuiz = () => {
    console.log("Quiz started");
    navigation.navigate("Quiz", { id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.counter}>
          {`${deck.questions.length} card${
            deck.questions.length === 1 ? "" : "s"
          }`}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button label="Add Card" onPress={onAddCard} />
        <Button
          label="Start Quiz"
          onPress={onStartQuiz}
          style={{ backgroundColor: Colors.BLACK, color: Colors.WHITE }}
        />
      </View>
    </View>
  );
};

export default DeckScreen;
