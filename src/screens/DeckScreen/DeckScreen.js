import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import styles from "./styles";
import Button from "../../components/Button/Button";
import Colors from "../../utils/colors";

const DeckScreen = ({ navigation, route: { params } }) => {
  const id = params ? params.id : "";
  const deck = useSelector(({ decks }) => {
    return decks && decks.decks && decks.decks[id]
      ? decks.decks[id]
      : { title: "", questions: [] };
  });

  const onAddCard = () => {
    navigation.navigate("Card", { id });
  };

  const onStartQuiz = () => {
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

DeckScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default DeckScreen;
