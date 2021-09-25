import React from "react";
import { View, FlatList } from "react-native";
import PropTypes from "prop-types";

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

  const onPress = ({ id }) => {
    navigation.navigate("Deck", { id });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={decks}
        renderItem={({ item }) => (
          <DeckItem
            id={item.id}
            title={item.title}
            cards={item.questions ? item.questions.length : 0}
            onPress={onPress}
          />
        )}
        keyExtractor={({ id }) => id}
        ListEmptyComponent={EmptyComponent}
      />
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};

export default HomeScreen;
