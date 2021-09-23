import React from "react";
import { View, TextInput, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import styles from "../NewDeckScreen/styles";
import Colors from "../../utils/colors";
import Button from "../../components/Button/Button";
import { saveCard } from "../../redux/actions/deck";
import Loader from "../../components/Loader/Loader";

const NewCardScreen = ({ navigation, route: { params } }) => {
  const id = params ? params.id : "";
  const [question, setQuestion] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [error, setError] = React.useState({});
  const { requesting } = useSelector((state) => state.decks);
  const diapatch = useDispatch();

  const onChangeText = ({ name, value }) => {
    setError({ ...error, [name]: "" });
    if (name === "question") {
      setQuestion(value);
    }
    if (name === "answer") {
      setAnswer(value);
    }
  };

  const onSubmit = () => {
    if (!question) {
      setError({ ...error, question: "Question is required." });
      return;
    }
    if (!answer) {
      setError({ ...error, answer: "Answer is required." });
      return;
    }
    diapatch(
      saveCard({
        deckId: id,
        card: { question, answer },
      })
    ).then(() => {
      navigation.navigate("Decks");
    });
  };

  return (
    <View style={styles.container}>
      {requesting && <Loader loading={requesting} />}
      <TextInput
        style={[
          styles.input,
          error && error.question ? { shadowColor: Colors.RED } : null,
        ]}
        value={question}
        placeholder="Question"
        placeholderTextColor={Colors.GREY}
        onChangeText={(text) => onChangeText({ name: "question", value: text })}
      />
      {error.question ? (
        <Text style={styles.error}>{error.question}</Text>
      ) : null}
      <TextInput
        style={[
          styles.input,
          error && error.answer ? { shadowColor: Colors.RED } : null,
        ]}
        value={answer}
        placeholder="Answer"
        placeholderTextColor={Colors.GREY}
        multiline={true}
        numberOfLines={3}
        onChangeText={(text) => onChangeText({ name: "answer", value: text })}
      />
      {error.answer ? <Text style={styles.error}>{error.answer}</Text> : null}
      <Button label="Submit" onPress={onSubmit} />
    </View>
  );
};

NewCardScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default NewCardScreen;
