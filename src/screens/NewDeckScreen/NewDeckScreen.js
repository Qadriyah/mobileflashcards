import React from "react";
import { View, Text, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles";
import { saveDeckTitle } from "../../redux/actions/deck";
import Colors from "../../utils/colors";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";

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
      setError("Title is required.");
      return;
    }
    dispatch(saveDeckTitle(title)).then(() => {
      setTitle("");
      navigation.navigate("Decks");
    });
  };

  return (
    <View style={styles.container}>
      {requesting && <Loader loading={requesting} color={Colors.WHITE} />}
      <Text style={styles.label}>Enter the title of your new deck</Text>
      <TextInput
        style={[styles.input, error ? { shadowColor: Colors.RED } : null]}
        value={title}
        placeholder="Deck Title"
        placeholderTextColor={Colors.GREY}
        onChangeText={(text) => onChangeText(text)}
      />
      <Button label="Submit" onPress={onSubmit} />
    </View>
  );
};

export default NewDeckScreen;
