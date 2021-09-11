import * as types from "../constants/deck";
import { saveDeck, getDecks, addCardToDeck } from "../../api";

const saveDeckRequest = (promise) => {
  return {
    type: types.SAVE_DECK_REQUEST,
    payload: promise,
  };
};

const saveDeckFailed = (error) => {
  return {
    type: types.SAVE_DECK_REQUEST,
    payload: error,
  };
};

const saveDeckSuccess = (deck) => {
  return {
    type: types.SAVE_DECK_SUCCESS,
    payload: deck,
  };
};

export const saveDeckTitle = (title) => {
  return (dispatch) => {
    const promise = saveDeck(title);
    dispatch(saveDeckRequest(promise));
    promise
      .then((data) => {
        dispatch(saveDeckSuccess(data));
      })
      .catch((error) => {
        dispatch(saveDeckFailed(error));
      });
    return promise;
  };
};

const getDecksRequest = (promise) => {
  return {
    type: types.GET_DECKS_REQUEST,
    payload: promise,
  };
};

const getDecksFailed = (error) => {
  return {
    type: types.GET_DECKS_FAILED,
    payload: error,
  };
};

const getDecksSuccess = (decks) => {
  return {
    type: types.GET_DECKS_SUCCESS,
    payload: decks,
  };
};

export const getAllDecks = () => {
  return (dispatch) => {
    const promise = getDecks();
    dispatch(getDecksRequest(promise));
    promise
      .then((data) => {
        dispatch(getDecksSuccess(data));
      })
      .catch((error) => {
        dispatch(getDecksFailed(error));
      });
    return promise;
  };
};

const saveCardRequest = (promise) => {
  return {
    type: types.SAVE_CARD_REQUEST,
    payload: promise,
  };
};

const saveCardFailed = (error) => {
  return {
    type: types.SAVE_CARD_FAILED,
    payload: error,
  };
};

const saveCardSuccess = (card) => {
  return {
    type: types.SAVE_CARD_SUCCESS,
    payload: card,
  };
};

export const saveCard = ({ deckId, card }) => {
  return (dispatch) => {
    const promise = addCardToDeck({ card, deckId });
    dispatch(saveCardRequest(promise));
    promise
      .then((data) => {
        dispatch(saveCardSuccess(data));
      })
      .catch((error) => {
        dispatch(saveCardFailed(error));
      });
    return promise;
  };
};
