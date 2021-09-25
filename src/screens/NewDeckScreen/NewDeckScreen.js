import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import styles from "./styles";
import { saveDeckTitle } from "../../redux/actions/deck";
import Colors from "../../utils/colors";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import { KeyboardAvoidingView } from "react-native";

const NewDeckScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState("");
  const [error, setError] = React.useState("");
  const { requesting } = useSelector((state) => state.decks);

  const onChangeText = (text) => {
    setError("");
    setTitle(text);
  };

  const onSubmit = () => {
    if (!title) {
      setError("Deck Title is required.");
      return;
    }
    dispatch(saveDeckTitle(title)).then((deck) => {
      setTitle("");
      const id = Object.values(deck)[0].id;
      navigation.navigate("Deck", { id });
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={`${Platform.OS === "ios" ? "padding" : "height"}`}
      >
        <View style={styles.container}>
          {requesting && <Loader loading={requesting} />}
          <TextInput
            style={[styles.input, error ? { shadowColor: Colors.RED } : null]}
            value={title}
            placeholder="Deck Title"
            placeholderTextColor={Colors.GREY}
            onChangeText={(text) => onChangeText(text)}
          />
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <Button label="Submit" onPress={onSubmit} />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

NewDeckScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};

export default NewDeckScreen;
