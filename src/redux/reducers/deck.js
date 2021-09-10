import * as types from "../constants/deck";

const initialState = {
  requesting: false,
  success: false,
  error: null,
  decks: {},
};

const deckReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_DECK_REQUEST:
      return {
        ...state,
        requesting: true,
      };

    case types.SAVE_DECK_FAILED:
      return {
        ...state,
        requesting: false,
        error: action.payload,
      };

    case types.SAVE_DECK_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        error: null,
        decks: { ...state.decks, ...action.payload },
      };

    case types.GET_DECKS_REQUEST:
      return {
        ...state,
        requesting: true,
      };

    case types.GET_DECKS_REQUEST:
      return {
        ...state,
        requesting: false,
        error: action.payload,
      };

    case types.GET_DECKS_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        error: null,
        decks: action.payload,
      };

    default:
      return state;
  }
};

export default deckReducer;
