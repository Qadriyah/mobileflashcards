import React from "react";
import { View, FlatList } from "react-native";

import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getAllDecks } from "../../redux/actions/deck";
import DeckItem from "../../components/DeckItem/DeckItem";
import EmptyComponent from "../../components/EmptyComponent/EmptyComponent";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const decks = useSelector(({ decks }) =>
    decks && decks.decks ? Object.values(decks.decks) : []
  );

  React.useEffect(() => {
    dispatch(getAllDecks());
  }, [dispatch]);

  const onPress = ({ title }) => {
    navigation.navigate("Deck", { title });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={decks}
        renderItem={({ item }) => (
          <DeckItem
            title={item.title}
            cards={item.questions.length}
            onPress={onPress}
          />
        )}
        keyExtractor={(item) => item.title}
        ListEmptyComponent={EmptyComponent}
      />
    </View>
  );
};

export default HomeScreen;
