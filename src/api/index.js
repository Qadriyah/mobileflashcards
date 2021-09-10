import AsyncStorage from "@react-native-async-storage/async-storage";

const DECKS = "decks";

export const saveDeck = async (title) => {
  try {
    const newDeck = {
      [title]: {
        title,
        questions: [],
      },
    };
    await AsyncStorage.mergeItem(DECKS, JSON.stringify(newDeck));
    return newDeck;
  } catch (error) {
    return error;
  }
};

export const getDecks = async () => {
  try {
    const decks = await AsyncStorage.getItem(DECKS);
    return JSON.parse(decks);
  } catch (error) {
    return error;
  }
};

export const getDeck = async (deckId) => {
  try {
    let decks = await AsyncStorage.getItem(DECKS);
    decks = JSON.parse(decks);
    return decks[deckId];
  } catch (error) {
    return error;
  }
};

export const addCardToDeck = async (deckId, card) => {
  try {
    let decks = await AsyncStorage.getItem(DECKS);
    decks = JSON.parse(decks);
    decks[deckId].questions = [...decks[deckId].questions, ...[card]];
    await AsyncStorage.setItem(DECKS, JSON.stringify(decks));
  } catch (error) {
    return error;
  }
};
