import * as types from "../constants/deck";
import { saveDeck, getDecks } from "../../api";

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
