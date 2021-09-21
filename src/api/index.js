import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

const DECKS = "decks";

export const saveDeck = async (title) => {
  try {
    const id = uuidv4();
    const newDeck = {
      [id]: {
        id,
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
    return decks ? JSON.parse(decks) : null;
  } catch (error) {
    return error;
  }
};

export const getDeck = async (deckId) => {
  try {
    let decks = await AsyncStorage.getItem(DECKS);
    decks = decks ? JSON.parse(decks) : null;
    return decks ? decks[deckId] : null;
  } catch (error) {
    return error;
  }
};

export const addCardToDeck = async ({ deckId, card }) => {
  try {
    card.id = uuidv4();
    let decks = await AsyncStorage.getItem(DECKS);
    decks = decks ? JSON.parse(decks) : null;
    if (decks) {
      decks[deckId].questions = [...decks[deckId].questions, ...[card]];
      await AsyncStorage.setItem(DECKS, JSON.stringify(decks));
      return {
        deckId,
        card,
      };
    }
  } catch (error) {
    return error;
  }
};
